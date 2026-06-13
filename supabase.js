// =============================================
// SUPABASE CONFIG — replace with your project values
// =============================================
const SUPABASE_URL = "https://dpleixkcisbfgmnmaeeu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_krxYGm4tOqEqFw9F47CIdQ_flm5Vz7R";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// =============================================
// AUTH HELPERS
// =============================================

async function getSession() {
  const { data: { session } } = await db.auth.getSession();
  return session;
}

async function getUser() {
  const session = await getSession();
  if (!session) return null;
  const { data, error } = await db
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();
  if (error) return null;
  return data;
}

async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}

async function requireAdmin() {
  const session = await requireAuth();
  if (!session) return;
  const user = await getUser();
  if (!user || user.role !== "admin") {
    window.location.href = "index.html";
    return;
  }
  return user;
}

async function requireNonAdmin() {
  const session = await requireAuth();
  if (!session) return;
  const user = await getUser();
  if (user && user.role === "admin") {
    window.location.href = "admin.html";
    return;
  }
  return user;
}

async function signOut() {
  await db.auth.signOut();
  window.location.href = "login.html";
}

// Format cash balance
function formatCash(amount) {
  return amount?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) ?? "0.00";
}

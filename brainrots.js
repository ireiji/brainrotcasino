// =============================================
// STATIC BRAINROT DATA (embedded)
// This data was taken from the Steal A Brainrot API response and avoids CORS.
// =============================================

const BRAINROTS = [
  {
    id: 'headless-horseman',
    name: 'Headless Horseman',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/headless-horseman-5ad7fbd9-cead-48be-b9c1-a53493fe69d1.webp',
    value: 21900,
    rarity: 'og'
  },
  {
    id: 'strawberry-elephant',
    name: 'Strawberry Elephant',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/strawberry-elephant-ffc5dae2-ead4-4688-b5b4-b5953eac99c2.webp',
    value: 2500,
    rarity: 'og'
  },
  {
    id: 'john-pork',
    name: 'John Pork',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/john-pork-5601c8ae-3748-42ab-9437-21b5650cda0e.webp',
    value: 1300,
    rarity: 'og'
  },
  {
    id: 'meowl',
    name: 'Meowl',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/meowl-4da886ad-6540-4f12-894a-51aa4a95cba7.webp',
    value: 1130,
    rarity: 'og'
  },
  {
    id: 'skibidi-toilet',
    name: 'Skibidi Toilet',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/skibidi-toilet-e5639e62-9f47-4789-8880-70166a7e3d43.webp',
    value: 750,
    rarity: 'og'
  },
  {
    id: 'spyder-elephant',
    name: 'Spyder Elephant',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/spyder-elephant-0d0bdd57-3e85-4d43-a873-0386a9cd3839.webp',
    value: 35000,
    rarity: 'secret'
  },
  {
    id: 'signore-carapace',
    name: 'Signore Carapace',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/signore-carapace-9150f42d-719f-4b91-98b5-d326762dff29.webp',
    value: 5050,
    rarity: 'secret'
  },
  {
    id: 'arcadragon',
    name: 'Arcadragon',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/arcadragon-10c7bd0e-5d25-43b4-a58b-9af1db4a23aa.webp',
    value: 1620,
    rarity: 'secret'
  },
  {
    id: 'elefanto-frigo',
    name: 'Elefanto Frigo',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/elefanto-frigo-a634614e-e1e3-405f-828f-cb6eefd95f1b.webp',
    value: 1480,
    rarity: 'secret'
  },
  {
    id: 'love-love-bear',
    name: 'Love Love Bear',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/love-love-bear-75981866-4ff4-4ed5-b43e-f16ef8a2ddc8.webp',
    value: 820,
    rarity: 'secret'
  },
  {
    id: 'antonio',
    name: 'Antonio',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/antonio-fc6e7716-370e-4732-8d60-6debba84cbe3.webp',
    value: 760,
    rarity: 'secret'
  },
  {
    id: 'griffin',
    name: 'Griffin',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/griffin-7f5190ff-c453-4b9b-b679-188210416e15.webp',
    value: 490,
    rarity: 'secret'
  },
  {
    id: 'dragon-gingerini',
    name: 'Dragon Gingerini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/dragon-gingerini-4ce706d7-6748-4f8a-97f4-3a0d19929d0d.webp',
    value: 475,
    rarity: 'secret'
  },
  {
    id: 'dragon-aquanini',
    name: 'Dragon Aquanini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/dragon-aquanini-19f72a85-10fb-4717-94be-f69e492ec111.webp',
    value: 397,
    rarity: 'secret'
  },
  {
    id: 'kalika-bros',
    name: 'Kalika Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/kalika-bros-c8bc0a07-d69d-4e7f-9d48-ef9bfb1b16a7.webp',
    value: 325,
    rarity: 'secret'
  },
  {
    id: 'pancake-and-syrup',
    name: 'Pancake and Syrup',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/pancake-and-syrup-3ee3c13e-0ca4-4e9f-a799-93e4405c1694.webp',
    value: 320,
    rarity: 'secret'
  },
  {
    id: 'tirilikalika-tirilikalako',
    name: 'Tirilikalika Tirilikalako',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tirilikalika-tirilikalako-412411ac-0302-4d57-885a-d90e867f9d42.webp',
    value: 300,
    rarity: 'secret'
  },
  {
    id: 'la-supreme-combinasion',
    name: 'La Supreme Combinasion',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-supreme-combinasion-eab7feb0-e1f1-4e07-82f0-a66f00124275.webp',
    value: 295,
    rarity: 'secret'
  },
  {
    id: 'fishino-clownino',
    name: 'Fishino Clownino',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/fishino-clownino-2f25bfa9-a311-49d9-9bff-8ea887f3b50a.webp',
    value: 253,
    rarity: 'secret'
  },
  {
    id: 'digi-narwhal',
    name: 'Digi Narwhal',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/digi-narwhal-e5c8146e-30c7-4b3e-ad7e-bede2bbe52bb.webp',
    value: 200,
    rarity: 'secret'
  },
  {
    id: 'ginger-gerat',
    name: 'Ginger Gerat',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/ginger-gerat-864aa3b3-c6ca-4250-9255-c1d0282f418e.webp',
    value: 200,
    rarity: 'secret'
  },
  {
    id: 'rico-dinero',
    name: 'Rico Dinero',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/rico-dinero-886b45ca-af53-4699-b1df-baa17b2ae8f9.webp',
    value: 125,
    rarity: 'secret'
  },
  {
    id: 'globa-steppa',
    name: 'Globa Steppa',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/globa-steppa-25801427-7f52-4502-812c-fd99b5ee5e4f.webp',
    value: 115,
    rarity: 'secret'
  },
  {
    id: 'hydra-bunny',
    name: 'Hydra Bunny',
    image: 'https://pub-0da4d3f5ffc249f79653b80ad2ffefc6.r2.dev/brainrots/hydra-bunny-bd77517c-4ebe-441a-9a14-baf25973ffb7.webp',
    value: 110,
    rarity: 'secret'
  },
  {
    id: 'hydra-dragon-cannelloni',
    name: 'Hydra Dragon Cannelloni',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/hydra-dragon-cannelloni-0ef42c04-be8d-4ee1-ad08-a08cfa93aada.webp',
    value: 110,
    rarity: 'secret'
  },
  {
    id: 'dragon-cannelloni',
    name: 'Dragon Cannelloni',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/dragon-cannelloni-833e087b-b2dd-4c95-a4cc-908c2928ab3b.webp',
    value: 100,
    rarity: 'secret'
  },
  {
    id: 'bunny-and-eggy',
    name: 'Bunny and Eggy',
    image: 'https://pub-0da4d3f5ffc249f79653b80ad2ffefc6.r2.dev/brainrots/bunny-and-eggy-33a36415-2916-4817-9bbf-6e4421c7326e.webp',
    value: 95,
    rarity: 'secret'
  },
  {
    id: 'dug-dug-dug',
    name: 'Dug dug dug',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/dug-dug-dug-f25d9cb4-fc5b-4af6-8b26-79dc4b557cfa.webp',
    value: 83,
    rarity: 'secret'
  },
  {
    id: 'duggy-bros',
    name: 'Duggy Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/duggy-bros-2e1a7880-de6d-4e41-aca9-72ff8c2ec9bf.webp',
    value: 72,
    rarity: 'secret'
  },
  {
    id: 'la-casa-boo',
    name: 'La Casa Boo',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-casa-boo-5f416e37-8f81-47eb-8455-6457b3d772c5.webp',
    value: 67,
    rarity: 'secret'
  },
  {
    id: 'jelly-moby',
    name: 'Jelly Moby',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/jelly-moby-423f5dfd-753e-47e9-aa25-e7b87ac44f0a.webp',
    value: 62,
    rarity: 'secret'
  },
  {
    id: 'ketupat-bros',
    name: 'Ketupat Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/ketupat-bros-738d40a6-cc1f-4067-ab13-5448b87e08d5.webp',
    value: 56,
    rarity: 'secret'
  },
  {
    id: 'foxini-lanternini',
    name: 'Foxini Lanternini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/foxini-lanternini-5c096fde-c208-47fe-b3bc-86a52fce4412.webp',
    value: 47,
    rarity: 'secret'
  },
  {
    id: 'rosey-and-teddy',
    name: 'Rosey and Teddy',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/rosey-and-teddy-21e298d4-e2a3-468f-8015-59ea0d30eda9.webp',
    value: 45,
    rarity: 'secret'
  },
  {
    id: 'los-hackers',
    name: 'Los Hackers',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-hackers-51fad80b-e270-4994-b96d-0b420bb35fe7.webp',
    value: 35,
    rarity: 'secret'
  },
  {
    id: 'quackini-snackini',
    name: 'Quackini Snackini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/quackini-snackini-0f41359d-78ac-4b46-aa6e-12090dc4c7c4.webp',
    value: 29,
    rarity: 'secret'
  },
  {
    id: 'cerberus',
    name: 'Cerberus',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/cerberus-45dfb2ec-1432-4272-8f10-cf5fa267004e.webp',
    value: 28,
    rarity: 'secret'
  },
  {
    id: 'los-amigos',
    name: 'Los Amigos',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-amigos--7a76f969-bf2a-47cb-89ff-1af7d24004a9.webp',
    value: 23,
    rarity: 'secret'
  },
  {
    id: 'festive-67',
    name: 'Festive 67',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/festive-67-7221e9b8-ac2f-4656-8cab-12cdf56bd84f.webp',
    value: 23,
    rarity: 'secret'
  },
  {
    id: 'spooky-and-pumpky',
    name: 'Spooky and Pumpky',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/spooky-and-pumpky-2df55dc7-d207-4546-b5bb-fbfa8fa92e80.webp',
    value: 20,
    rarity: 'secret'
  },
  {
    id: 'cooki-and-milki',
    name: 'Cooki and Milki',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/cooki-and-milki-711f93ca-d16b-433b-9809-38358a160372.webp',
    value: 19,
    rarity: 'secret'
  },
  {
    id: 'reinito-sleighito',
    name: 'Reinito Sleighito',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/reinito-sleighito-e18c56e1-2c73-4dda-8f0d-f2861303d2e5.webp',
    value: 19,
    rarity: 'secret'
  },
  {
    id: 'la-food-combinasion',
    name: 'La Food Combinasion',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-food-combinasion-c809bcf5-b4e8-472e-9dfe-e0872c0a5636.webp',
    value: 18,
    rarity: 'secret'
  },
  {
    id: 'los-sekolahs',
    name: 'Los Sekolahs',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-sekolahs-459cbbed-a2e3-4d32-b3ce-cc59abf07bb6.webp',
    value: 18,
    rarity: 'secret'
  },
  {
    id: 'guest-666',
    name: 'Guest 666',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/guest-666-18fa0007-a9fb-463d-8241-d9521b9a97d8.webp',
    value: 17,
    rarity: 'secret'
  },
  {
    id: 'fragrama-and-chocrama',
    name: 'Fragrama and Chocrama',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/fragrama-and-chocrama-195368a8-6ecf-47ea-8f30-7f420ac19ba4.webp',
    value: 17,
    rarity: 'secret'
  },
  {
    id: 'fortunu-and-cashuru',
    name: 'Fortunu and Cashuru',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/fortunu-and-cashuru-765dfc9b-03ce-427c-a004-25f757cac986.webp',
    value: 17,
    rarity: 'secret'
  },
  {
    id: 'cloverat-clapat',
    name: 'Cloverat Clapat',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/cloverat-clapat-df5e6ee8-8dd7-4398-b191-3aab8efa0e59.webp',
    value: 16,
    rarity: 'secret'
  },
  {
    id: 'popcuru-and-fizzuru',
    name: 'Popcuru and Fizzuru',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/popcuru-and-fizzuru-bbe57857-4679-4aef-b7ec-917c5c9243c1.webp',
    value: 16,
    rarity: 'secret'
  },
  {
    id: 'fragola-la-la-la',
    name: 'Fragola La La La',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/fragola-la-la-la-bd907e99-ebc8-41b5-92a5-e510924778bd.webp',
    value: 14,
    rarity: 'secret'
  },
  {
    id: 'tralaledon',
    name: 'Tralaledon',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tralaledon-6926de57-0e64-4164-a437-33a27d9c4e61.webp',
    value: 14,
    rarity: 'secret'
  },
  {
    id: 'gym-bros',
    name: 'Gym Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/gym-bros-eca3d2fb-1128-41dc-be96-cb06b3baabca.webp',
    value: 13,
    rarity: 'secret'
  },
  {
    id: 'capitano-moby',
    name: 'Capitano Moby',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/capitano-moby-08369614-14e3-4c38-a081-c766d349eb15.webp',
    value: 13,
    rarity: 'secret'
  },
  {
    id: 'celularcini-viciosini',
    name: 'Celularcini Viciosini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/celularcini-viciosini-33d490a8-c374-478c-8148-a26e328d3c1d.webp',
    value: 12,
    rarity: 'secret'
  },
  {
    id: 'hopilikalika-hopilikalako',
    name: 'Hopilikalika Hopilikalako',
    image: 'https://pub-0da4d3f5ffc249f79653b80ad2ffefc6.r2.dev/brainrots/hopilikalika-hopilikalako-85adec49-a8f5-488c-a440-ea4012c37dec.webp',
    value: 12,
    rarity: 'secret'
  },
  {
    id: 'celestial-pegasus',
    name: 'Celestial Pegasus',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/celestial-pegasus-e8ab6466-57c4-4b5a-a687-bd51861da408.webp',
    value: 11,
    rarity: 'secret'
  },
  {
    id: 'los-hotspotsitos',
    name: 'Los Hotspotsitos',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-hotspotsitos-b2f047d9-266a-4a99-bceb-267c2d802c45.webp',
    value: 10,
    rarity: 'secret'
  },
  {
    id: 'boppin-bunny',
    name: 'Boppin bunny',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/boppin-bunny-4a894238-84cc-4123-8272-9b4f5a0d0894.webp',
    value: 10,
    rarity: 'secret'
  },
  {
    id: 'coco-and-mango',
    name: 'Coco and Mango',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/coco-and-mango-6db72ad4-f493-4677-a747-adae373419b7.webp',
    value: 10,
    rarity: 'secret'
  },
  {
    id: 'los-tacoritas',
    name: 'Los Tacoritas',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-tacoritas-e3e97c24-1791-48d2-bb0b-4dff33fcfb66.webp',
    value: 9,
    rarity: 'secret'
  },
  {
    id: 'rubrikiko',
    name: 'Rubrikiko',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/rubrikiko-bd388317-8d8e-4f12-ac25-39cb8f19db26.webp',
    value: 9,
    rarity: 'secret'
  },
  {
    id: 'la-ginger-sekolah',
    name: 'La Ginger Sekolah',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-ginger-sekolah-b928a274-1541-40cd-be73-17d6817c5c91.webp',
    value: 9,
    rarity: 'secret'
  },
  {
    id: 'burguro-and-fryuro',
    name: 'Burguro And Fryuro',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/burguro-and-fryuro-f8ed97a8-6fad-4ed4-a054-b7060ef0e28c.webp',
    value: 9,
    rarity: 'secret'
  },
  {
    id: 'cash-or-card',
    name: 'Cash or Card',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/cash-or-card-d2d50717-eedb-42b2-b7d0-9a34598ec868.webp',
    value: 8,
    rarity: 'secret'
  },
  {
    id: 'los-bros',
    name: 'Los Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-bros-10353672-0448-436f-abcd-79d48d0db248.webp',
    value: 8,
    rarity: 'secret'
  },
  {
    id: 'los-spaghettis',
    name: 'Los Spaghettis',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-spaghettis-7c824762-ffea-4412-9256-343cb5e0f7f1.webp',
    value: 8,
    rarity: 'secret'
  },
  {
    id: 'chipso-and-queso',
    name: 'Chipso and Queso',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/chipso-and-queso-8b37da29-75f6-434e-9a29-8815c66aef27.webp',
    value: 7,
    rarity: 'secret'
  },
  {
    id: 'chillin-chili',
    name: 'Chillin Chili',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/chillin-chili-243c1276-5b8d-4cd4-af24-3bc9221af086.webp',
    value: 7,
    rarity: 'secret'
  },
  {
    id: 'gold-gold-gold',
    name: 'Gold Gold Gold',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/gold-gold-gold-e003111d-feb8-4c6d-b4ce-66a3036ae47f.webp',
    value: 7,
    rarity: 'secret'
  },
  {
    id: 'garama-and-madundung',
    name: 'Garama and Madundung',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/garama-and-madundung-c5b21d78-ebf3-4de3-b6b2-fa233e15ea88.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'abyssaloco',
    name: 'Abyssaloco',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/abyssaloco-dbef0190-38da-468d-a7b8-a2ea0a8bb351.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'steakini-fattini',
    name: 'Steakini Fattini',
    image: 'https://static.wikia.nocookie.net/stealabr/images/9/9e/Steakini_Fattini.png/revision/latest?cb=20260531000718',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'caylusaurus',
    name: 'Caylusaurus',
    image: 'https://static.wikia.nocookie.net/stealabr/images/5/55/Caylusaurus_png.png/revision/latest?cb=20260609185543',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'la-easter-grande',
    name: 'La Easter Grande',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-easter-grande-91d21eee-b970-49eb-9d20-7c653dce9605.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'la-secret-combinasion',
    name: 'La Secret Combinasion',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-secret-combinasion-16c20ff7-8fe5-4db8-8097-bbfd5843f55e.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'la-taco-combinasion',
    name: 'La Taco Combinasion',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-taco-combinasion-586284f5-592a-4c67-861b-dad213c265cc.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'las-sis',
    name: 'Las Sis',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/las-sis-3f98baa7-0557-48c8-8758-2206e2154e8f.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'los-chillis',
    name: 'Los Chillis',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-chillis-8b5efd65-f710-4d6c-826e-47fa25aa7c48.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'los-primos',
    name: 'Los Primos',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-primos-f9c6c4a8-af61-47cf-8e72-be7e182f809e.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'sammyni-cakini',
    name: 'Sammyni Cakini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/sammyni-cakini-8bf43be4-33a4-49d0-9602-0b34eddb3df8.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'w-or-l',
    name: 'W or L',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/w-or-l-39ab2486-4875-4aeb-b058-40569ebe6e16.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'los-puggies',
    name: 'Los Puggies',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-puggies-65930ef7-b645-4f4b-918b-a61dc460c636.webp',
    value: 6,
    rarity: 'secret'
  },
  {
    id: 'nacho-spyder',
    name: 'Nacho Spyder',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/nacho-spyder-fec318a1-f068-481e-8e22-4a80db7af156.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'gobblino-uniciclino',
    name: 'Gobblino Uniciclino',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/gobblino-uniciclino-2aaf330a-8e4d-4b54-9440-e43d62052d02.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'john-doe',
    name: 'John Doe',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/john-doe-26cb30f4-d2dc-4ec6-bd38-162e3ec57455.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'la-extinct-grande',
    name: 'La Extinct Grande',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-extinct-grande-067cbb2b-9ca3-48b3-a5f5-c3bf87ccf02c.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'money-money-bros',
    name: 'Money Money Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/money-money-bros-3d5c8396-fa52-4a41-ac45-b69c34123b39.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'orcaledon',
    name: 'Orcaledon',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/orcaledon-1784e895-92e7-4251-bf35-101a99d16edd.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'rosetti-tualetti',
    name: 'Rosetti Tualetti',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/rosetti-tualetti-5bb46edc-091e-49f6-a73a-c517ccddd867.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'sammyni-fattini',
    name: 'Sammyni Fattini',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/sammyni_fattini-e6be13c7-6812-40e9-b578-96e06b55a006.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'swaggy-bros',
    name: 'Swaggy Bros',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/swaggy-bros-cccda6dc-9992-4502-99e0-6bcb10e9d5d2.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'money-money-reindeer',
    name: 'Money Money Reindeer',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/money-money-reindeer-9110711b-76b5-4c16-ac8c-4aea583c5f7c.webp',
    value: 5,
    rarity: 'secret'
  },
  {
    id: 'eviledon',
    name: 'Eviledon',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/eviledon-e9da2d2e-3898-47c6-9e69-8770e2f75b29.webp',
    value: 4,
    rarity: 'secret'
  },
  {
    id: 'la-spooky-grande',
    name: 'La Spooky Grande',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-spooky-grande-0c5e4d22-3831-4ca3-995f-07a28abf1a27.webp',
    value: 4,
    rarity: 'secret'
  },
  {
    id: 'lovin-rose',
    name: 'Lovin Rose',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/lovin-rose-d06f6679-f58b-4884-b35e-3407b5219e7a.webp',
    value: 4,
    rarity: 'secret'
  },
  {
    id: 'tacorita-bicicleta',
    name: 'Tacorita Bicicleta',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tacorita-bicicleta-46b39e6f-9152-4435-a267-c6fcf3ccdf05.webp',
    value: 4,
    rarity: 'secret'
  },
  {
    id: 'bananito',
    name: 'Bananito',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/bananito-bc3454f7-daa0-431c-82b3-1f3b864a224c.webp',
    value: 4,
    rarity: 'secret'
  },
  {
    id: 'la-romantic-grande',
    name: 'La Romantic Grande',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-romantic-grande-8d3edeae-332c-4833-8251-4aa99fad97ce.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'los-mariachis',
    name: 'Los Mariachis',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-mariachis-04c14a35-09f9-4672-a816-3c235e50a447.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'los-planitos',
    name: 'Los Planitos',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/los-planitos-ec725d4d-8fa8-46fc-9bc9-953d7baa334b.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'tictac-sahur',
    name: 'Tictac Sahur',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tictac-sahur-aaec4647-31ce-42d8-9f15-ae964249d209.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'strawberrita',
    name: 'Strawberrita',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/strawberrita-da518307-2404-4c81-87ca-20f978acd94f.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'ventoliero-pavonero',
    name: 'Ventoliero Pavonero',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/ventoliero-pavonero-e9535b1e-daf6-4b64-9ff5-b665d793083e.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'la-jolly-grande',
    name: 'La Jolly Grande',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/la-jolly-grande-97ce0ea9-712d-418f-baa8-3da17d0f937f.webp',
    value: 3,
    rarity: 'secret'
  },
  {
    id: 'lavadorito-spinito',
    name: 'Lavadorito Spinito',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/lavadorito-spinito-95d6709c-e73a-49ce-bcac-9c083237d871.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'ketchuru-and-musturu',
    name: 'Ketchuru and Musturu',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/ketchuru-and-musturu-ab6eddf4-d65c-42b9-bb64-5d037b730185.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'tuff-toucan',
    name: 'Tuff Toucan',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tuff-toucan-b042b4c1-b5ee-4c4a-8ccd-42d162378f6c.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'ketupat-kepat',
    name: 'Ketupat Kepat',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/ketupat-kepat-a25ed330-0fcd-4b62-92db-b2983f78c432.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'nuclearo-dinossauro',
    name: 'Nuclearo Dinossauro',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/nuclearo-dinossauro-6f0dde87-442e-470c-8ce0-75fed305e39e.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'mariachi-corazoni',
    name: 'Mariachi Corazoni',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/mariachi-corazoni-5fc5e021-cf32-486e-898b-142c6d3d9a02.webp',
    value: 2,
    rarity: 'secret'
  },
  {
    id: 'tang-tang-keletang',
    name: 'Tang Tang Keletang',
    image: 'https://pub-85e0c3b055f44e068739b1c2f8eeba1d.r2.dev/brainrots/tang-tang-keletang-bd409b3e-cd28-49aa-8195-bf49c5a82381.webp',
    value: 2,
    rarity: 'secret'
  }
];

function getBrainrot(id) {
  return BRAINROTS.find(b => b.id === id);
}

function getBrainrotName(id) {
  const b = getBrainrot(id);
  return b?.name || id;
}


// =============================================
// HELPERS (unchanged)
// =============================================

function getBrainrot(id) {
  return BRAINROTS.find(b => b.id === id);
}

function getBrainrotName(id) {
  const b = getBrainrot(id);
  return b?.name || id;
}
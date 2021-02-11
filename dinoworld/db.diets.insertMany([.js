db.users.insertMany([
  {
    name: "Peter",
    lastname: "Jhonson",
    date_of_birth: "12-03-1986",
    email_address: "DavidELeblanc@dayrep.com",
    password: "pughieYie5",
    admin: true,
    id_selected_dinos: [ObjectId("60254ac91aa84ae7755d9882")],
  },
  {
    name: "Eugene",
    lastname: "J. Oja",
    date_of_birth: "07-06-1972",
    email_address: "EugeneJOja@dayrep.com",
    password: "ahs9ieK8",
    admin: true,
    id_selected_dinos: [
      ObjectId("60254ac91aa84ae7755d988a"),
      ObjectId("60254ac91aa84ae7755d988d"),
    ],
  },
  {
    name: "Edelweiss",
    lastname: "Castro Ramón",
    date_of_birth: "17-09-2000",
    email_address: "EdelweissCastroRamon@mail.com",
    password: "eeHae3eif",
    admin: false,
    id_selected_dinos: [],
  },
  {
    name: "Alethia",
    lastname: "Escobar Ortega",
    date_of_birth: "25-08-2010",
    email_address: "AlethiaEscobarOrtega@rhyta.com",
    password: "Ib0fainah9",
    admin: false,
    id_selected_dinos: [
      ObjectId("60254ac91aa84ae7755d9894"),
      ObjectId("60254ac91aa84ae7755d988e"),
    ],
  },
  {
    name: "Bart",
    lastname: "Márquez Solorio",
    date_of_birth: "13-10-2003",
    email_address: "BartMarquezSolorio@teleworm.us",
    password: "Grjdk3kdk9",
    admin: false,
    id_selected_dinos: [],
  },
  {
    name: "Baudelio",
    lastname: "Cabán Acevedo",
    date_of_birth: "05-11-2002",
    email_address: "BaudelioCabanAcevedo@dayrep.com",
    password: "shien1ohY",
    admin: false,
    id_selected_dinos: [
      ObjectId("60254ac91aa84ae7755d9891"),
      ObjectId("60254ac91aa84ae7755d988b"),
    ],
  },
  {
    name: "Felicia",
    lastname: "Almanza Preciado",
    date_of_birth: "07-07-2007",
    email_address: "FeliciaAlmanzaPreciado@rhyta.com",
    password: "aid6fo8Si",
    admin: false,
    id_selected_dinos: [],
  },
]);

Triassic = "60242e9f38bb8da8518e437d" = 301;
Jurassic = "60242e9f38bb8da8518e437e" = 302;
Cretaceous = "60242e9f38bb8da8518e437f" = 303;

Carnivore = "6024319138bb8da8518e4384" = 201;
Herbivore = "6024319138bb8da8518e4385" = 202;

"South America" = "6024304838bb8da8518e4380" = 101;
"North America" = "6024304838bb8da8518e4381" = 102;
"Europe" = "6024304838bb8da8518e4382" = 103;
"Asia" = "6024304838bb8da8518e4383" = 104;
"Africa" = "60243f8cca991f23928eb75d" = 105;

db.dinosaurus.insertMany([
  {
    name: "Stegosaurus",
    weight: 7000,
    height: 5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 7,
    length: 9,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-09.jpg",
  },
  {
    name: "Brachiosaurus",
    weight: 35000,
    height: 15,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 8,
    length: 25,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-12.jpg",
  },
  {
    name: "Ankylosaurus",
    weight: 5000,
    height: 1.6,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 10,
    length: 6,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-11.jpg",
  },
  {
    name: "Diplodocus",
    weight: 12000,
    height: 6,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 15,
    length: 32,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_diplodocus.jpg",
  },
  {
    name: "Dracoraptor",
    weight: 40,
    height: 1,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 25,
    length: 3,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://images.dinosaurpictures.org/Dracoraptor/news-dracoraptor_0f29.jpg",
  },
  {
    name: "Pterodactylus",
    weight: 150,
    height: 1,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 60,
    length: 2,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: true,
    img: "https://www.wennoanimal.com/uploads/animals/original/Pterosaur.jpg",
  },
  {
    name: "Allosaurus",
    weight: 2500,
    height: 3,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 30,
    length: 9,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: false,
    img:
      "https://cdna.artstation.com/p/assets/images/images/012/701/066/large/albert-brigos-allosaurus-v2.jpg?1536085079",
  },
  {
    name: "Iguanodon",
    weight: 3200,
    height: 3.5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 30,
    length: 10,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-08.jpg",
  },
  {
    name: "Dilophosaurus",
    weight: 400,
    height: 3.5,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 38,
    length: 6,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-11.jpg",
  },
  {
    name: "Plesiosaurus",
    weight: 500,
    height: 1,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 16,
    length: 3.5,
    periodsId: ObjectId("60242e9f38bb8da8518e437e"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_plesiosaurus.jpg",
  },
  {
    name: "Tyrannosaurus",
    weight: 7500,
    height: 5,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 40,
    length: 12,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-15.jpg",
  },
  {
    name: "Triceratops",
    weight: 12000,
    height: 5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 30,
    length: 8,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4381"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-10.jpg",
  },
  {
    name: "Velociraptop",
    weight: 15,
    height: 0.7,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 64,
    length: 2,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4383"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-12.jpg",
  },
  {
    name: "Spinosaurus",
    weight: 8300,
    height: 7,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 18,
    length: 15,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4380"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-13.jpg",
  },
  {
    name: "Amargasaurus",
    weight: 2600,
    height: 2.5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 25,
    length: 10,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4380"),
    top: true,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_amargasaurus.jpg",
  },
  {
    name: "Mosasaurus",
    weight: 13000,
    height: 2,
    dietsId: ObjectId("6024319138bb8da8518e4384"),
    topSpeed: 48,
    length: 18,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_mosasaurus.jpg",
  },
  {
    name: "Lambeosaurus",
    weight: 4000,
    height: 3,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 25,
    length: 14,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_lambeosaurus.jpg",
  },
  {
    name: "Parasaurolophus",
    weight: 2500,
    height: 3.5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 40,
    length: 10,
    periodsId: ObjectId("60242e9f38bb8da8518e437f"),
    continentsId: ObjectId("6024304838bb8da8518e4380"),
    top: false,
    img:
      "https://www.wennoanimal.com/uploads/animals/original/img_parasaurolophus.jpg",
  },
  {
    name: "Asylosaurus",
    weight: 25,
    height: 0.7,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 12,
    length: 2,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img:
      "https://images.dinosaurpictures.org/Asylosaurus_yalensis_by_karkemish00_9538.jpg",
  },
  {
    name: "Isanosaurus",
    weight: 5500,
    height: 2,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 8,
    length: 7,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("6024304838bb8da8518e4383"),
    top: false,
    img:
      "https://images.dinosaurpictures.org/Isanosaurus-Yamamoto-Seiji_0808.jpg",
  },
  {
    name: "Mussaurus",
    weight: 150,
    height: 1,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 9,
    length: 3,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("6024304838bb8da8518e4380"),
    top: false,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mussaurus_patagonicus_life_restoration.png/1024px-Mussaurus_patagonicus_life_restoration.png",
  },
  {
    name: "Melanorosaurus",
    weight: 1800,
    height: 2.5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 6,
    length: 8,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("60243f8cca991f23928eb75d"),
    top: false,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Melanorosaurus_readi_steveoc.jpg/1024px-Melanorosaurus_readi_steveoc.jpg",
  },
  {
    name: "Plateosaurus",
    weight: 3000,
    height: 2.5,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 6,
    length: 10,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("6024304838bb8da8518e4382"),
    top: false,
    img: "https://images.dinosaurpictures.org/Plateosaurus_1_be90.jpg",
  },
  {
    name: "Unaysaurus",
    weight: 70,
    height: 0.8,
    dietsId: ObjectId("6024319138bb8da8518e4385"),
    topSpeed: 6,
    length: 2.5,
    periodsId: ObjectId("60242e9f38bb8da8518e437d"),
    continentsId: ObjectId("6024304838bb8da8518e4380"),
    top: false,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Unaysaurus.jpg",
  },
]);

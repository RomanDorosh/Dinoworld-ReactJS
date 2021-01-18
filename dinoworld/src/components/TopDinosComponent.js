import "./TopDinosComponent.css";

export default function TopDinos() {
  const dinos = [
    {
      name: "T-Rex",
      weight: 7500,
      height: 5,
      diet: "Carnivore",
      topSpeed: 40,
      length: 12,
      period: "Cretaceous",
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-15.jpg",
    },
    {
      name: "Triceratops",
      weight: 12000,
      height: 5,
      diet: "Herbivore",
      topSpeed: 30,
      length: 8,
      period: "Cretaceous",
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-10.jpg",
    },
    {
      name: "Velociraptop",
      weight: 15,
      height: 0.5,
      diet: "Carnivore",
      topSpeed: 64,
      length: 2,
      period: "Cretaceous",
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-12.jpg",
    },
    {
      name: "Stegosaurus",
      weight: 7000,
      height: 5,
      diet: "Herbivore",
      topSpeed: 7,
      length: 9,
      period: "Jurassic",
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-09.jpg",
    },
    {
      name: "Spinosaurus",
      weight: 8300,
      height: 7,
      diet: "Carnivore",
      topSpeed: 18,
      length: 15,
      period: "Cretaceous",
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-13.jpg",
    },
  ];

  return (
    <div id="bg-img-top-dinos">
      <div className="grid-container">
        {dinos.map((dino) => {
          return <DinoCard key={dino.name} {...dino} />;
        })}
      </div>
    </div>
  );
}

const DinoCard = ({ name, weight, height, diet, topSpeed, period, img }) => {
  return (
    <div className="grid-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h6>Weight: {weight}</h6>
      <h6>Height: {height}</h6>
      <h6>Diet: {diet}</h6>
      <h6>Top Speed: {topSpeed}</h6>
      <h6>Period: {period}</h6>
    </div>
  );
};

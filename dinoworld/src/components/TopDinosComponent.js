import "./TopDinos.css";

export default function TopDinos({dinos}) {
 
  return (
    <div id="bg-img-top-dinos">
      <div className="grid-container">
        
        {/* Using filter and map methods we display only "top" dinos */}
        {dinos.filter(dino => dino.top).map((dino) => {
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

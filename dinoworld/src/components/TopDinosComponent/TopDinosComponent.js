import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import "./TopDinos.css";

export default function TopDinos({ dinos }) {
  return (
    <div className="grid-container">
      {/* Using filter and map methods we display only "top" dinos */}
      {dinos
        .filter(dino => dino.top)
        .map(dino => {
          return <DinoCardComponent key={dino.ID} {...dino} />;
        })}
    </div>
  );
}

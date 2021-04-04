import DinoCardGameComponent from "./DinoCardGameComponent";
import "./CardGame.css";

export default function CardGameComponent({
  dinos,
  visibleDinos,
  setVisibleDinos,
  finishedDinos,
  checkForMatch
}) {
  return (
    <div>
      <div className="grid-container">
        {dinos.map((dino, index) => (
          <DinoCardGameComponent
            key={dino.id}
            className={`${
              visibleDinos.includes(index) ? "grid-game-card-open" : ""
            }
          ${
            finishedDinos.includes(index)
              ? "grid-game-card-open grid-card-finished"
              : ""
          }`}
            onClick={() => {
              console.log("I'm clicked");
              if (!finishedDinos.includes(index)) {
                //chek if finishedDino doesn't include index of current dino
                switch (visibleDinos.length) {
                  case 0:
                    setVisibleDinos([index]); //Assign to oppend cards array (visibleDinos) index of current dino if it is empty
                    break;
                  case 1: // If oppened cards array has one element we check if it has the same index of current dino that being processed
                    if (visibleDinos[0] !== index) {
                      setVisibleDinos(visibleDinos.concat(index)); //if doesn't include we concat that index to the oppend card array

                      //Invoked the function for check if indexes are equal by passing first element of visibleDinos array
                      //as first argument and current index of beimg processed dino as second argument
                      checkForMatch(visibleDinos[0], index);
                    }
                    break;
                  case 2:
                    setVisibleDinos([index]);
                    break;
                  default:
                    setVisibleDinos([]);
                }
              }
            }}
            img={dino.img}
            name={dino.name}
          />
        ))}
      </div>
    </div>
  );
}

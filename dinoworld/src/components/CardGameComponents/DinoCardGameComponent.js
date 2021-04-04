import { urlApi } from "../../App";
import "./CardGame.css";

export default function DinoCardGameComponent({ img, onClick, className }) {
  return (
    <div className={`grid-game-card ${className}`} onClick={onClick}>
      <img
        className="grid-game-card-img"
        src={`${urlApi}/images/${img}`}
        alt=""
      />
    </div>
  );
}

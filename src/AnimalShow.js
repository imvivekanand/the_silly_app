import "./AnimaShow.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import chameleon from "./svg/chameleon.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import dolphin from "./svg/dolphin.svg";
import fox from "./svg/fox.svg";
import gator from "./svg/gator.svg";
import goat from "./svg/goat.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import lion from "./svg/lion.svg";
import tiger from "./svg/tiger.svg";

const svgMap = {
  //bird: bird -> equivalent code below
  bird,
  cat,
  chameleon,
  cow,
  dog,
  dolphin,
  fox,
  gator,
  goat,
  horse,
  lion,
  tiger,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}

export default AnimalShow;

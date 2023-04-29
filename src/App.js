import AnimalShow from "./AnimalShow";
import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";

function getRandomAnimal() {
  const animals = [
    "cow",
    "bird",
    "cat",
    "dog",
    "gator",
    "horse",
    "goat",
    "fox",
    "lion",
    "tiger",
    "dolphin",
    "chameleon",
  ];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  })

  return (
    <div className="app">
    <Navbar/>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;

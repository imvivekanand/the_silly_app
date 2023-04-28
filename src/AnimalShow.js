import { useState } from "react";

function getRandomAnimal(){
    const animals = ['cow','bird','cat', 'dog', 'gator', 'horse', 'goat', 'fox', 'lion', 'tiger'];

    return animals[Math.floor(Math.random() * animals.length)]
}


export default function AnimalShow(){
    const [animals, setAnimals] = useState([])


    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    return(
    <div>
    <button onClick={handleClick}>Add Animal</button>
    <div>{animals}</div>
    </div>
    )
}

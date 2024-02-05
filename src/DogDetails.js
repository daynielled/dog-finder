import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!currentDog) {
        return <h2>Dog not found</h2>
    }

    return (
        <div>
            <h1>{currentDog.name}</h1>
            <img src={currentDog.src} alt={currentDog.name} />
            <p>Age: {currentDog.age} years</p>
            <ul>
                {currentDog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;
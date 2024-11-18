import "./Deck_card.css";
import { useState } from "react";

type AnimalType = {
  nom: string;
  nom_male: string;
  nom_femelle: string;
  image: string;
  savais_tu: string;
  poids_kg: number;
  longueur_cm: number;
  longevite: number;
  gestation_jours: number;
};

interface Deck_cardProps {
  setAnimal: (animal: AnimalType) => void;
}

function Deck_card({ setAnimal }: Deck_cardProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const getAnimal = () => {
    fetch("http://localhost:3310/api/animalsLibrary")
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setAnimal(data.results[randomIndex]);
        setIsButtonClicked(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="drawCard">
      {isButtonClicked && (
        <button type="button" onClick={getAnimal} className="buttonDrawCard" />
      )}
    </div>
  );
}
export default Deck_card;

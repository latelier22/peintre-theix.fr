"use client";
import { useEffect } from "react";
import Card from "./Card";

const Cards = ({ cards, buttonColor , syliusCard}) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <header>



  <div className="container mx-auto px-5 py-2 md:py-8 md:px-12 lg:px-20 lg:py-12 animate-appear">
    <div className="m-5 flex first-line:flex-wrap md:-m-2 h-full">
      {/* Utiliser une boucle pour générer les éléments d'image */}
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex items-stretch md:mb-8 flex-grow justify-around w-full md:w-1/2 lg:w-1/4 h-full"
        >
          <div className="flex-grow h-full">
            <Card
              index={index}
              syliusCard={syliusCard}
              card={card}
              buttonColor={
                card.buttonColor === "" ? buttonColor : card.buttonColor
              }
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</header>


  );
};

export default Cards;

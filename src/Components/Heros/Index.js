import React from "react";
import Hero from "../../Container/CardHero/Index";

import "./Heros.scss";

const Index = () => {
  const Heros = [
    {
      id: 1,
      name: "Carlos Alfredo Robles Nuño",
      message: "Hello it is wednesday my duuuuudeeess",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      name: "Mauricio Perea Aguilar",
      message: "I im the king in the north",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 3,
      name: "Rogelio Plata Cortés",
      message: "Que pasa gente soy lolito",
      photo: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  const getHero = Heros.map((hero) => {
    return (
      <Hero
        key={hero.id}
        name={hero.name}
        message={hero.message}
        photo={hero.photo}
      />
    );
  });

  return <div className="heros">{getHero}</div>;
};

export default Index;

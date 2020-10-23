import React from "react";
import Hero from "../../Container/CardHero/Index";

import "./Heros.scss";

const Index = () => {
  const Heros = [
    {
      id: 1,
      name: "Carlos Alfredo Robles Nuño",
      message: "Hello it is wednesday my duuuuudeeess",
      photo:
        "https://media-exp1.licdn.com/dms/image/C4E03AQF0GZz3bIhFag/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=FXo3lfKs2Os2b5VfCnvKCSs_7jjc0r13jBKSrw-OABw",
    },
    {
      id: 2,
      name: "Mauricio Perea Aguilar",
      message: "I im the king in the north",
      photo:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFLaY5wZvKJiA/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=zNhcI_mO7RB-GN1fxUT5PRqbHxUNYp7p7nY__xZAdgk",
    },
    {
      id: 3,
      name: "Rogelio Plata Cortés",
      message: "Que pasa gente soy lolito",
      photo:
        "https://media-exp1.licdn.com/dms/image/C5603AQEtAaXHeP0J2g/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=7FvInK9g6F2gtxhcJFb63mS2307wxP9U_RacYGYlzA8",
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

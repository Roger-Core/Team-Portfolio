import React from "react";
import Hero from "../../Components/Heros/Index";

import "./HomePage.scss";

const Index = () => {
  return (
    <section>
      <div className="presentation">
        <h1>{"<Hello World/>"}</h1>
        <br />
        <div className="story">
          <h3>Developers Team</h3>
        </div>
      </div>
      <Hero />
    </section>
  );
};

export default Index;

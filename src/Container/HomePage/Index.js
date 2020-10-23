import React from "react";
import { Link } from "react-router-dom";
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
      <div className="col-md-12 text-center">
        <h4>We will work together for your creative project.</h4>
        <Link to="/portfolios">
          <button className="btn-link">Portfolio</button>
        </Link>
      </div>
    </section>
  );
};

export default Index;

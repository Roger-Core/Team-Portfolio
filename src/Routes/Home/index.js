import React from "react";
import DevsInfo from "../../DevsInfo";

import "./Home.scss";

import Projects from "../../Projects";

const Home = () => {
  return (
    <section>
      <div className="presentation">
        <h1>{"<Hello World />"}</h1>
        <br />
        <div className="story">
          <h4>We will work together for your creative project.</h4>
        </div>
      </div>
      <Projects />
      <div className="col-md-12 text-center">
        <h3>Developers Team</h3>
        <p className="about-us">
          We are a team of full-stack developers capable of working and managing
          any type of project. <br /> You can trust our ability and experience.
        </p>
        <DevsInfo />
      </div>
    </section>
  );
};

export default Home;

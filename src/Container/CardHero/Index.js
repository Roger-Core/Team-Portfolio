import React from "react";

import "./CardHero.scss";

const Index = (props) => {
  return (
    <section>
      <div className="card" style={{ width: "22rem", margin: "20px" }}>
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.message}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">PROJECT 1</li>
          <li className="list-group-item">PROJECT 2</li>
          <li className="list-group-item">PROJECT 3</li>
        </ul>
      </div>
    </section>
  );
};

export default Index;

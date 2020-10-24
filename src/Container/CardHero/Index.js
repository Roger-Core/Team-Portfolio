import React from "react";

import "./CardHero.scss";

const Index = (props) => {
  return (
    <div
      style={{ width: "28rem", margin: "20px", borderRadius: "8px" }}
      className="card-deck"
    >
      <div className="card">
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.message}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Index;

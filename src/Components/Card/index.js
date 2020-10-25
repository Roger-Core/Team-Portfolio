import React from "react";

import "./Card.scss";

const Card = ({ photo, title, role, description, url }) => {
  return (
    <div
      style={{ width: "28rem", margin: "20px", borderRadius: "8px" }}
      className="card-deck"
    >
      <div className="card">
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{role}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a rel="noopener noreferrer" href={url} target="_blank">
            <small className="text-muted">{url}</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

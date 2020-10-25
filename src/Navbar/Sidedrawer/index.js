import React from "react";
import { Link } from "react-router-dom";

import "./Sidedrawer.scss";

const Index = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <h2
          style={{ marginBottom: "25px", marginLeft: "35px", color: "#22ce78" }}
        >
          MENU
        </h2>
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Home</li>
          <hr />
        </Link>
        <Link to="/">
          <i class="fas fa-users" aria-hidden="true"></i>
          <li>About</li>
          <hr />
        </Link>
        <Link to="/">
          <i className="fas fa-briefcase" aria-hidden="true"></i>
          <li>Portfolio</li>
          <hr style={{ color: "#22ce78" }} />
        </Link>
        <Link to="/">
          <i class="fas fa-address-card" aria-hidden="true"></i>
          <li>Contact</li>
          <hr />
        </Link>
      </ul>
    </nav>
  );
};

export default Index;

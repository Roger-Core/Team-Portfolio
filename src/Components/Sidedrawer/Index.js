import React from "react";

import "./Sidedrawer.scss";

const Index = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Home</li>
          <hr />
        </a>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>About</li>
          <hr />
        </a>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Portfolio</li>
          <hr style={{ color: "#22ce78" }} />
        </a>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Contact</li>
          <hr />
        </a>
      </ul>
    </nav>
  );
};

export default Index;

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
          <li>Inicio</li>
          <hr />
        </a>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Portafolios</li>
          <hr />
        </a>
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
          <li>Quienes somos?</li>
          <hr />
        </a>
      </ul>
    </nav>
  );
};

export default Index;

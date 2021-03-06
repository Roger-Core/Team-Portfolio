import React from "react";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton";

import "./Navbar.scss";

const Navigation = ({ drawerClickHandler }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="space-list"></div>
        <div className="toolbar-logo">
          <h1>BeDevs Software</h1>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

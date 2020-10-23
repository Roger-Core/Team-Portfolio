import React from "react";
import DrawerToggleButton from "../Sidedrawer/DrawerToggleButton/Index";

import "./Navbar.scss";

const Index = ({ drawerClickHandler }) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className="space-list"></div>
        <div className="toolbar-logo">
          <h1>TEAM NAME</h1>
        </div>
      </nav>
    </header>
  );
};

export default Index;

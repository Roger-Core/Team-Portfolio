import React, { useState } from "react";
import Backdrop from "./Components/Backdrop/Index";
import Navbar from "./Components/Navbar/Index";
import Sidedrawer from "./Components/Sidedrawer/Index";
import HomePage from "./Container/HomePage/Index";

import "./App.css";

const App = () => {
  const [sidedrawerOpen, setSidedrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSidedrawerOpen((prevState) => {
      return { sidedrawerOpen: !prevState.sidedrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSidedrawerOpen(false);
  };

  let backdrop;
  let sidedrawer;

  if (sidedrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="App">
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <Sidedrawer show={sidedrawerOpen} />
      {sidedrawer}
      {backdrop}
      <HomePage />
    </div>
  );
};

export default App;

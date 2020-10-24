import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import Backdrop from "./Components/Backdrop/Index";
import Navbar from "./Components/Navbar/Index";
import Sidedrawer from "./Components/Sidedrawer/Index";
import HomePage from "./Container/HomePage/Index";
import CardPortfolio from "./Container/CardPortfolios/Index";
import Footer from "./Components/Footer/Index";

import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar drawerClickHandler={drawerToggleClickHandler} />
        <Sidedrawer show={sidedrawerOpen} />
        {sidedrawer}
        {backdrop}

        <Route exact path="/" component={HomePage} />
        <Route path="/portfolios" component={CardPortfolio} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

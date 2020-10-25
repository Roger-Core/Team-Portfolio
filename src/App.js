import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import Home from "./Routes/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

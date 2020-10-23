import React from "react";
import CardPortolios from "../../Container/CardPortfolios/Index";

const Index = () => {
  const Portfolios = [
    {
      id: 1,
      name: "",
      message: "",
      photo: "",
    },
    {
      id: 2,
      name: "",
      message: "",
      photo: "",
    },
    {
      id: 3,
      name: "",
      message: "",
      photo: "",
    },
  ];

  const getPortfolio = Portfolios.map((portfolio) => {
    return (
      <CardPortolios
        key={portfolio.id}
        name={portfolio.name}
        message={portfolio.message}
        photo={portfolio.photo}
      />
    );
  });

  return getPortfolio;
};

export default Index;

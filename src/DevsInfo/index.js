import React from "react";

import Card from "../Components/Card";
import configs from "../project-config";
import "./DevsInfo.scss";

const { creators } = configs;

const DevsInfo = () => (
  <div className="DevsInfo">
    {creators.map((item) => (
      <Card
        key={item.id}
        title={item.name}
        role={item.role}
        description={item.message}
        photo={item.photo}
        url={item.url}
      />
    ))}
  </div>
);

export default DevsInfo;

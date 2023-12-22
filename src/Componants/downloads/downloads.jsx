import React from "react";
import "./downloads.css";

import Header from "../downloads/downloads componant/header/header";
import Card01 from "./downloads componant/card01/card01";
import Card02 from "./downloads componant/card02/card02";

const Downloads = () => {
  return (
    <div className="downloads">
      <Header />
      <Card01 />
      <Card02 />
    </div>
  );
};

export default Downloads;

import React from "react";
import Header from "../../onBoard/header";
import JackpotBanner from "./JackpotBanner";
import NumbersToPlayChoice from "./NumbersToPlayChoice";
import PickNumbers from "./PickNumbers";
import Tabs from "./Tabs";

const TreasureHunt = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg pb-0">
      <Header />
      <div className="row treasurehunt-bg">
        <div className="ezl-dashboard-container">
          <JackpotBanner />
          <Tabs />
          <NumbersToPlayChoice />
          <PickNumbers />
        </div>
      </div>
    </div>
  );
};

export default TreasureHunt;

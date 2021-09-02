import React from "react";
import MyCommunitiesList from "./MyCommunitiesList";
import SideBar from "./SideBar";

const MainContents = () => {
  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="dApp-S-Home-body">
          <div className="row m-0">
            <MyCommunitiesList />
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContents;

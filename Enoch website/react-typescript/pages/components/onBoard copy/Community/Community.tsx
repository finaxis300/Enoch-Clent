import React from "react";
import CommunityEdit from "./CommunityEdit";
import CommunitySideBar from "./CommunitySideBar";
import Header from "../../../Component/onBoard/header";

const Community = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <h2 className="community-manage-hd">
            <a href="#">Back to Community</a>
          </h2>
          <div className="enoch-community-manage-block">
            <CommunitySideBar />
            <CommunityEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

import React from "react";
import Header from "../../../../Component/onBoard/header";
import { HeaderBreadCrumb } from "../../Header/HeaderBreadCrumb";
import OrganisationalDetailsSection from "./OrganisationalDetailsSection";
import UserInfoSection from "./UserInfoSection";
import UserNameSection from "./UserNameSection";

const AdminProfile = () => {
  return (
    <div className="container-fluid dashboard-body-bg">
      <Header />
      <HeaderBreadCrumb
        mainPath={"admin"}
        subPath={"profile"}
        innerSubPath={"regina cooper"}
      />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="Admin-Profile-body">
            <div className="row custom-row">
              <UserNameSection />
              <UserInfoSection />
              <OrganisationalDetailsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

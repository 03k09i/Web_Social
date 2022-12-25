import React from "react";
import ChangePass from "./changePass/changePass.info";
import UpdateAvatar from "./updateAvatar/updateAvatar.info";
import UpdateInfo from "./updateInfo/updateInfo.info";

export default function InfoProfile() {
  return (
    <div className="account-hub-content" style={{ margin: "20px 0" }}>
      <div className="section-header">
        <div className="section-header-info">
          <p className="section-pretitle">My Profile</p>
          <h2 className="section-title">Profile Info</h2>
        </div>
      </div>
      <div className="grid grid-3-6-3 mobile-prefer-content">
        <UpdateAvatar />
        <UpdateInfo />
        <ChangePass />
      </div>
    </div>
  );
}

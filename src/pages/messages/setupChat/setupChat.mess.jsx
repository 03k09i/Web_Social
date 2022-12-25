import React from "react";
import { useParams } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline, IoHomeOutline } from "react-icons/io5";
import CustomMenuSetup from "./menuSetup/customMenu.setup";
import PrivacyAndSuportMenuSetup from "./menuSetup/privacyAndSuportMenu.setup";
import VehicleMenuSetup from "./menuSetup/vehicleMenu.setup";

export default function SetupChatMess() {
  const { idChannel } = useParams();
  return idChannel !== "new" ? (
    <div
      className="chat-widget"
      style={{
        height: window.innerHeight - 120,
        flexDirection: "column",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 20,
        }}
      >
        <a
          className="user-short-description-avatar user-avatar medium"
          href="profile-timeline.html"
        >
          <img src={"/img/landing/mylove2.jpg"} className="image-avatar-120" />
        </a>
        <p
          style={{
            color: "#3e3f5e",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 7,
          }}
        >
          Kiệt Phan
        </p>
        <p style={{ color: "#adafca", fontSize: 15 }}>
          Hoạt động 10 phút trước
        </p>
      </div>
      <div className="user-stats">
        <div className="user-stat">
          <p className="user-stat-title">
            <IoHomeOutline className="setup-chat-icon40" />
          </p>
          <p className="user-stat-text">Trang chủ</p>
        </div>
        <div className="user-stat">
          <p className="user-stat-title">
            <IoMdNotificationsOutline className="setup-chat-icon40" />
          </p>
          <p className="user-stat-text">Tắt thông báo</p>
        </div>
        <div className="user-stat">
          <p className="user-stat-title">
            <IoSearchOutline className="setup-chat-icon40" />
          </p>
          <p className="user-stat-text">Tìm kiếm</p>
        </div>
      </div>
      <ul
        className="menu"
        data-simplebar
        style={{
          marginTop: 15,
          paddingTop: 15,
          borderTop: "1px solid #eaeaf5",
          overflow: "hidden scroll",
          display: "flex",
        }}
      >
        <CustomMenuSetup />
        <VehicleMenuSetup />
        <PrivacyAndSuportMenuSetup />
      </ul>
    </div>
  ) : null;
}

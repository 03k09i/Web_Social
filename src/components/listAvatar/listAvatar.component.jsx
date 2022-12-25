import React from "react";
import ItemAvatar from "./itemAvatar/itemAvatar.listAvatar";

export default function ListAvatar() {
  return (
    <div className="user-avatar-list medium reverse centered">
      <ItemAvatar />

      <a className="user-avatar smaller no-stats" href="group-members.html">
        <div className="user-avatar-content">
          <img
            src={"/img/landing/mylove2.jpg"}
            className="image-avatar-32"
            alt="error"
            style={{ padding: 2, backgroundColor: "#fff" }}
          />
          <div
            style={{
              width: 32,
              height: 32,
              padding: 2,
              position: "absolute",
              transform: "translate(0px, -100%)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgb(0 0 0 / 50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="user-avatar-overlay-content">
          <p className="user-avatar-overlay-content-text">+132</p>
        </div>
      </a>
    </div>
  );
}

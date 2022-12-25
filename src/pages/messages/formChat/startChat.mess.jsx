import React from "react";

export default function StartChatMess() {
  return (
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
        <img
          src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
          className="image-avatar-120"
        />
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
      <p style={{ color: "#adafca", fontSize: 15 }}>Các bạn đã là bạn bè</p>
      <p style={{ color: "#adafca", fontSize: 15 }}>
        Học tại trường Sư Phạm Kỹ Thuật TP.HCM
      </p>
    </div>
  );
}

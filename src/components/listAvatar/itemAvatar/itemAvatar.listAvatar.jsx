import React from "react";

export default function ItemAvatar() {
  return (
    <div className="user-avatar smaller no-stats">
      <div className="user-avatar-content">
        <img
          src={"/img/landing/mylove2.jpg"}
          className="image-avatar-32"
          alt="error"
          style={{ padding: 2, backgroundColor: "#fff" }}
        />
      </div>
    </div>
  );
}

import React from "react";

export default function WaitChatLeftMess() {
  return (
    <div className="chat-widget-speaker left">
      <div className="chat-widget-speaker-avatar">
        <div className="user-avatar tiny no-border">
          <div className="user-avatar-content">
            <img
              src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
              className="image-avatar-30"
            />
          </div>
        </div>
      </div>
      <p className="chat-widget-speaker-message" style={{ padding: 3 }}>
        <lord-icon
          src="https://cdn.lordicon.com/ymrqtsej.json"
          trigger="loop"
          style={{ width: "50px", height: "50px" }}
          colors="primary:#3e3f5e"
        ></lord-icon>
      </p>
    </div>
  );
}

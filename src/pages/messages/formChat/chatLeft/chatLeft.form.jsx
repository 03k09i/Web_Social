import React from "react";
import ItemChatLeft from "./itemChatLeft/item.chatLeft";

export default function ChatLeftForm(props) {
  const { itemMess, onSeen, onReply } = props;
  console.log(itemMess);
  return (
    <div
      className="chat-widget-speaker left"
      style={{ marginTop: !onReply ? 0 : 16 }}
    >
      {onSeen ? (
        <div className="chat-widget-speaker-avatar">
          <div className="user-avatar tiny no-border">
            <div className="user-avatar-content">
              <img
                src={"/img/landing/mylove2.jpg"}
                className="image-avatar-30"
                alt="ERROR"
              />
            </div>
          </div>
        </div>
      ) : null}
      <ItemChatLeft itemMess={itemMess} />
    </div>
  );
}

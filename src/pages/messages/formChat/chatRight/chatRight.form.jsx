import React from "react";
import ItemChatRight from "./itemChatRight/item.chatRight";

export default function ChatRightForm(props) {
  const { itemMess, onSeen, onReply } = props;
  return (
    <div
      className="chat-widget-speaker right"
      style={{ marginTop: !onReply ? 0 : 16 }}
    >
      {onSeen ? (
        <div className="chat-widget-speaker-avatar">
          <img
            src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
            className="image-avatar-14"
            alt="ERROR"
          />
        </div>
      ) : null}
      <ItemChatRight itemMess={itemMess} onSeen={onSeen} />
    </div>
  );
}

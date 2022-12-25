import React, { useState } from "react";
import AddGroupMess from "./addGroup/addGroup.mess";
import FormChatMess from "./formChat/formChat.mess";
import ListChatMess from "./listChat/listChat.mess";
import SetupChatMess from "./setupChat/setupChat.mess";

export default function MessagesPage() {
  const [onSetupChat, setOnSetupChat] = useState(true);
  return (
    <div className="content-grid">
      <div className="account-hub-content">
        <div className="chat-widget-wrap">
          <ListChatMess />
          <FormChatMess
            onSetupChat={onSetupChat}
            setOnSetupChat={setOnSetupChat}
          />
          {/* {onSetupChat ? <SetupChatMess /> : null} */}
        </div>
      </div>
    </div>
  );
}

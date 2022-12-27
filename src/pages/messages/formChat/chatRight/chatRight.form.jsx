import React, { useState } from "react";
import ItemChatRight from "./itemChatRight/item.chatRight";

export default function ChatRightForm(props) {
  const { itemMess, onSeen, onReply } = props;
  const [hideMess, setHideMess] = useState(false);
  return !hideMess ? (
    <div
      className="chat-widget-speaker right"
      style={{ marginTop: !onReply ? 0 : 16 }}
    >
      {onSeen ? (
        <div className="chat-widget-speaker-avatar">
          <img
            src={
              itemMess?.user?.avatar?.link ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
            }
            className="image-avatar-14"
            alt="ERROR"
          />
        </div>
      ) : null}
      <ItemChatRight
        itemMess={itemMess}
        onSeen={onSeen}
        setHideMess={setHideMess}
      />
    </div>
  ) : null;
}

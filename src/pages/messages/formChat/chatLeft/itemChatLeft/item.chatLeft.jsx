import React, { useState } from "react";
import { BsReply, BsEmojiSmile } from "react-icons/bs";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../../../../components/reaction/reactionSmall.component";

export default function ItemChatLeft(props) {
  const { itemMess } = props;
  const [showReaction, setShowReaction] = useState(null);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  return (
    <div style={{ width: "100%" }} className="hover-show-reply-mess">
      {/* <p className="chat-widget-speaker-message item-message-opacity">
        That reminds me that I wanted
      </p> */}
      <div className="item-message-left">
        <p className="chat-widget-speaker-message ">
          {/* item-message-delete */}
          {/* <img
            className="reaction-option-image-messages"
            src={"/img/reaction/like.png"}
            alt="reaction-like"
            style={{ right: 12 }}
          /> */}
          {itemMess?.content}
        </p>
        <div className="item-message-group-icon">
          <BsReply className="wh-icon25 ml-10" />
          <BsEmojiSmile
            aria-describedby={id}
            className="wh-icon20 ml-10"
            onClick={(event) => {
              setShowReaction(showReaction ? null : event.currentTarget);
              setTimeout(() => {
                setShowReaction(false);
              }, 2000);
            }}
          />
          <Popper id={id} open={open} anchorEl={showReaction} placement="top">
            <ReactionSmall />
          </Popper>
        </div>
      </div>
    </div>
  );
}

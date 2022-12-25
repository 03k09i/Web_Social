import React, { useState } from "react";
import { BsReply, BsEmojiSmile } from "react-icons/bs";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../../../../components/reaction/reactionSmall.component";

export default function ItemChatRight(props) {
  const { itemMess, onSeen } = props;
  const [showReaction, setShowReaction] = useState(null);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;

  return (
    <div style={{ width: "100%" }} className="hover-show-reply-mess">
      {/* <p className="chat-widget-speaker-message item-message-opacity">
        You're right, it's been a really long time! I think the last time we saw
        was at Neko's party
      </p> */}
      <div
        className={onSeen ? "item-message-right mb-10" : "item-message-right"}
      >
        <div
          className={
            showReaction
              ? "item-message-group-icon active"
              : "item-message-group-icon"
          }
        >
          <BsEmojiSmile
            aria-describedby={id}
            className="wh-icon20 mr-10"
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
          <BsReply className="wh-icon25 mr-10" />
        </div>
        <p className="chat-widget-speaker-message ">
          {/*item-message-delete*/}
          {/* <img
            className="reaction-option-image-messages"
            src={"/img/reaction/like.png"}
            alt="reaction-like"
          /> */}
          {itemMess?.content}
        </p>
      </div>
    </div>
  );
}

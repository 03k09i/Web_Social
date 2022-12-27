import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsReply, BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { BsPersonX } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoNotificationsOffOutline } from "react-icons/io5";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../../../../components/reaction/reactionSmall.component";

export default function ItemChatLeft(props) {
  const { idChannel } = useParams();
  const { socket } = useSelector((state) => state.socket);
  const { itemMess } = props;
  const [messRemove, setMessRemove] = useState(false);
  const [showReaction, setShowReaction] = useState(null);
  const [showSetup, setShowSetup] = useState(null);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const open1 = Boolean(showSetup);
  const id1 = open1 ? "simple-popper" : undefined;

  useEffect(() => {
    socket.on("deletemessage", (data) => {
      if (
        data.message.mess._id === itemMess._id &&
        data.message.idChannel === idChannel
      ) {
        setMessRemove(true);
      }
    });
  }, []);
  return (
    <div style={{ width: "100%" }} className="hover-show-reply-mess">
      {/* <p className="chat-widget-speaker-message item-message-opacity">
        That reminds me that I wanted
      </p> */}
      <div className="item-message-left">
        <p
          className={
            messRemove || itemMess.status === 1
              ? "chat-widget-speaker-message item-message-delete"
              : "chat-widget-speaker-message"
          }
        >
          {/* item-message-delete */}
          {/* <img
            className="reaction-option-image-messages"
            src={"/img/reaction/like.png"}
            alt="reaction-like"
            style={{ right: 12 }}
          /> */}
          {messRemove || itemMess.status === 1
            ? "Tin nhắn đã được thu hồi"
            : itemMess?.content}
        </p>
        {messRemove || itemMess.status === 1 ? null : (
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
            {/* <BsThreeDotsVertical
            className="wh-icon20 ml-10"
            aria-describedby={id1}
            onClick={(event) => {
              setShowSetup(showSetup ? null : event.currentTarget);
              setTimeout(() => {
                setShowSetup(false);
              }, 2000);
            }}
          />
          <Popper id={id1} open={open1} anchorEl={showSetup} placement="top">
            <div className="simple-dropdown post-settings-dropdown">
              <p className="simple-dropdown-link">
                <IoNotificationsOffOutline className="icon-setup-item-chat" />
                Tắt thông báo
              </p>
              <p className="simple-dropdown-link">
                <BsPersonX className="icon-setup-item-chat" />
                Chặn
              </p>
              <p className="simple-dropdown-link">
                <RiDeleteBin5Line className="icon-setup-item-chat" />
                Xóa đoạn chat
              </p>
            </div>
          </Popper> */}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsReply, BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../../../../components/reaction/reactionSmall.component";
import {
  deleteMessageAction,
  removeMessageAction,
} from "../../../../../store/actions/message.actions";

export default function ItemChatRight(props) {
  const dispatch = useDispatch();
  const { idChannel } = useParams();
  const { socket } = useSelector((state) => state.socket);
  const { itemMess, onSeen, setHideMess } = props;
  const [messRemove, setMessRemove] = useState(false);
  const [showReaction, setShowReaction] = useState(null);
  const [showSetup, setShowSetup] = useState(null);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const open1 = Boolean(showSetup);
  const id1 = open1 ? "simple-popper" : undefined;

  const removeMess = async () => {
    await dispatch(removeMessageAction(itemMess._id));
    await setMessRemove(true);
    socket.emit("deleteChat", {
      message: { mess: itemMess, idChannel },
      room: idChannel,
    });
  };
  const deleteMess = async () => {
    await dispatch(deleteMessageAction(itemMess._id));
    await setHideMess(true);
  };
  return (
    <div style={{ width: "100%" }} className="hover-show-reply-mess">
      {/* <p className="chat-widget-speaker-message item-message-opacity">
        Bạn đã thu hồi một tin nhắn
      </p> */}
      <div
        className={onSeen ? "item-message-right mb-10" : "item-message-right"}
      >
        {messRemove || itemMess.status === 1 ? null : (
          <div
            className={
              showReaction
                ? "item-message-group-icon active"
                : "item-message-group-icon"
            }
          >
            <BsThreeDotsVertical
              className="wh-icon20 mr-10"
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
                <p
                  className="simple-dropdown-link"
                  onClick={() => removeMess()}
                >
                  <AiOutlineEyeInvisible className="icon-setup-item-chat" />
                  Gỡ tin nhắn
                </p>
                <p
                  className="simple-dropdown-link"
                  onClick={() => deleteMess()}
                >
                  <RiDeleteBin5Line className="icon-setup-item-chat" />
                  Xóa tin nhắn
                </p>
              </div>
            </Popper>
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
        )}
        <p
          className={
            messRemove || itemMess.status === 1
              ? "chat-widget-speaker-message item-message-delete"
              : "chat-widget-speaker-message"
          }
        >
          {/*item-message-delete*/}
          {/* <img
            className="reaction-option-image-messages"
            src={"/img/reaction/like.png"}
            alt="reaction-like"
          /> */}
          {messRemove || itemMess.status === 1
            ? "Bạn đã gỡ một tin nhắn"
            : itemMess?.content}
        </p>
      </div>
    </div>
  );
}

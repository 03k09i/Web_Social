import React, { useState, useRef } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { TbDots } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { BsPersonX } from "react-icons/bs";
import Popper from "@mui/material/Popper";
import ClickOutside from "../../../../components/clickOutside/clickOutside.component";

export default function ItemChatList(props) {
  const { itemChannel } = props;
  const checkOutside = useRef();
  const [listSetupItemChat, setListSetupItemChat] = useState(false);
  const open = Boolean(listSetupItemChat);
  const id = open ? "simple-popper" : undefined;

  return (
    <NavLink
      className={
        itemChannel?.unread !== 0
          ? "chat-widget-message background-listchat"
          : "chat-widget-message"
      }
      to={`/message/${itemChannel._id}`}
    >
      <div className="user-status">
        <div className="user-status-avatar">
          <div className="user-avatar small no-outline">
            <div className="user-avatar-content">
              <img
                src={
                  itemChannel?.avatar ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                className="image-avatar-40"
              />
            </div>
            {itemChannel?.unread !== 0 ? (
              <div className="user-avatar-badge">
                <p className="user-avatar-badge-text">{itemChannel?.unread}</p>
              </div>
            ) : null}
          </div>
        </div>
        <p className="user-status-title">
          <span className="bold">{itemChannel?.name}</span>
        </p>
        <p className="user-status-text">{itemChannel?.last_message?.content}</p>
        <p className="user-status-timestamp floaty">
          {moment(itemChannel.last_message_time).fromNow()}
        </p>
        <div
          aria-describedby={id}
          className="setup-item-chat"
          style={listSetupItemChat ? { visibility: "visible" } : null}
          onClick={(event) => {
            setListSetupItemChat(
              listSetupItemChat ? null : event.currentTarget,
            );
          }}
          ref={checkOutside}
        >
          <TbDots className="wh-icon20" />
          <Popper
            id={id}
            open={open}
            anchorEl={listSetupItemChat}
            placement="left-start"
          >
            <div className="simple-dropdown post-settings-dropdown">
              <ClickOutside
                checkOutside={checkOutside}
                setCloseModal={setListSetupItemChat}
              />
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
          </Popper>
        </div>
      </div>
    </NavLink>
  );
}

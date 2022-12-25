import React, { useState, useRef } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function ItemMessagesHeader(props) {
  const navigate = useNavigate();
  const { itemMess, setCloseModal } = props;
  const onRead = () => {
    setCloseModal(false);
    navigate(`/message/${itemMess._id}`);
  };
  return (
    <div
      className={
        itemMess?.unread !== 0
          ? "dropdown-box-list-item background-listchat"
          : "dropdown-box-list-item"
      }
      onClick={() => onRead()}
    >
      <div className="user-status">
        <div className="user-status-avatar">
          <div className="user-avatar small no-outline">
            <div className="user-avatar-content">
              <img
                src={
                  itemMess?.avatar ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                className="image-avatar-40"
              />
            </div>
            {itemMess?.unread !== 0 ? (
              <div className="user-avatar-badge">
                <p className="user-avatar-badge-text">{itemMess?.unread}</p>
              </div>
            ) : null}
          </div>
        </div>
        <p className="user-status-title">
          <span className="bold">{itemMess?.name}</span>
        </p>
        <p className="user-status-text">{itemMess?.last_message?.content}</p>
        <p className="user-status-timestamp floaty">
          {moment(itemMess.last_message_time, "YYYYMMDD").fromNow()}
        </p>
      </div>
    </div>
  );
}

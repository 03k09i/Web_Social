import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function SidebarListFriendHeader() {
  const { listChannel } = useSelector((state) => state.channel);
  const [showMore, setShowMore] = useState(false);
  const showListChannel = (listChannel) => {
    let result = null;
    if (listChannel?.length > 0) {
      result = listChannel.map((itemMess, index) => {
        return (
          <NavLink
            className="chat-widget-message"
            key={index}
            to={`/message/${itemMess._id}`}
          >
            <div className="user-status">
              <div className="user-status-avatar">
                <div className="user-avatar small no-outline online">
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
                      <p className="user-avatar-badge-text">
                        {itemMess?.unread}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <p className="user-status-title">
                <span className="bold">{itemMess?.name}</span>
              </p>
              <p className="user-status-text small">
                {itemMess?.last_message?.content}
              </p>
              <p className="user-status-timestamp floaty">
                {moment(itemMess.last_message_time).fromNow()}
              </p>
            </div>
          </NavLink>
        );
      });
    }
    return result;
  };
  return (
    <aside
      id="chat-widget-messages"
      className={
        showMore
          ? "chat-widget sidebar right"
          : "chat-widget closed sidebar right"
      }
    >
      <div className="chat-widget-messages" data-simplebar>
        {showListChannel(listChannel)}
      </div>
      <form className="chat-widget-form">
        <div className="interactive-input small">
          <input
            type="text"
            id="chat-widget-search"
            name="chat_widget_search"
            placeholder="Search Messages..."
          />
          <div className="interactive-input-icon-wrap">
            <svg className="interactive-input-icon icon-magnifying-glass">
              <use xlinkHref="#svg-magnifying-glass" />
            </svg>
          </div>
          <div className="interactive-input-action">
            <svg className="interactive-input-action-icon icon-cross-thin">
              <use xlinkHref="#svg-cross-thin" />
            </svg>
          </div>
        </div>
      </form>
      <div
        className="chat-widget-button"
        onClick={() => setShowMore(!showMore)}
      >
        <div className="chat-widget-button-icon">
          <div className="burger-icon">
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
            <div className="burger-icon-bar" />
          </div>
        </div>
        <p className="chat-widget-button-text">Messages / Chat</p>
      </div>
    </aside>
  );
}

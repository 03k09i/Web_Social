import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import ItemChatList from "./itemChat/itemChat.list";

export default function ListChatMess(props) {
  const navigate = useNavigate();
  const { listChannel } = useSelector((state) => state.channel);

  const showListChannel = (listChannel) => {
    let result = null;
    if (listChannel?.length > 0) {
      result = listChannel.map((itemChannel, index) => {
        return <ItemChatList key={index} itemChannel={itemChannel} />;
      });
    }
    return result;
  };
  return (
    <div
      className="chat-widget static"
      style={{
        height: window.innerHeight - 120,
      }}
    >
      <div
        className="section-header"
        style={{
          padding: "14px 22px 0px",
          margin: 0,
        }}
      >
        <div className="section-header-info">
          <h2 className="section-title">Messages</h2>
        </div>
        <div className="section-header-actions">
          <p
            className="section-header-action"
            onClick={() => navigate(`/message/new`)}
          >
            <AiOutlineUsergroupAdd style={{ width: 25, height: 25 }} />
          </p>
        </div>
      </div>
      <form
        className="chat-widget-form"
        style={{
          boxShadow: "0 1px 0 0 rgb(94 92 154 / 10%)",
          borderRadius: "0",
        }}
      >
        {/* <div className="interactive-input small">
          <input
            type="text"
            id="chat-widget-search-2"
            name="chat_widget_search_2"
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
        </div> */}
      </form>
      <div
        className="chat-widget-messages"
        data-simplebar
        style={{
          height: window.innerHeight - 120 - 48 - 90,
        }}
      >
        {showListChannel(listChannel)}
      </div>
    </div>
  );
}

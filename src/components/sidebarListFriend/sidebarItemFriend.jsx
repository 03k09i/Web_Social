import React from "react";

export default function SidebarItemFriendHeader() {
  return (
    <aside
      id="chat-widget-message"
      className="chat-widget chat-widget-overlay delayed sidebar right"
    >
      <div className="chat-widget-header">
        <div className="chat-widget-close-button">
          <svg className="chat-widget-close-button-icon icon-back-arrow">
            <use xlinkHref="#svg-back-arrow" />
          </svg>
        </div>
        <div className="user-status">
          <div className="user-status-avatar">
            <div className="user-avatar small no-outline online">
              <div className="user-avatar-content">
                <img
                  src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
                  className="image-avatar-40"
                />
              </div>
              <div className="user-avatar-badge">
                <p className="user-avatar-badge-text">16</p>
              </div>
            </div>
          </div>
          <p className="user-status-title">
            <span className="bold">Nick Grissom</span>
          </p>
          <p className="user-status-tag online">Online</p>
        </div>
      </div>
      <div className="chat-widget-conversation" data-simplebar>
        <div className="chat-widget-speaker left">
          <div className="chat-widget-speaker-avatar">
            <div className="user-avatar tiny no-border">
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-24-26"
                  data-src="img/avatar/03.jpg"
                />
              </div>
            </div>
          </div>
          <p className="chat-widget-speaker-message">
            Hi Marina! It's been a long time!
          </p>
          <p className="chat-widget-speaker-timestamp">Yesterday at 8:36PM</p>
        </div>
        <div className="chat-widget-speaker right">
          <p className="chat-widget-speaker-message">Hey Nick!</p>
          <p className="chat-widget-speaker-message">
            You're right, it's been a really long time! I think the last time we
            saw was at Neko's party
          </p>
          <p className="chat-widget-speaker-timestamp">10:05AM</p>
        </div>
        <div className="chat-widget-speaker left">
          <div className="chat-widget-speaker-avatar">
            <div className="user-avatar tiny no-border">
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-24-26"
                  data-src="img/avatar/03.jpg"
                />
              </div>
            </div>
          </div>
          <p className="chat-widget-speaker-message">
            Yeah! I remember now! The stream launch party
          </p>
          <p className="chat-widget-speaker-message">
            That reminds me that I wanted to ask you something
          </p>
          <p className="chat-widget-speaker-message">
            Can you stream the new game?
          </p>
        </div>
      </div>
      <form className="chat-widget-form">
        <div className="interactive-input small">
          <input
            type="text"
            id="chat-widget-message-text"
            name="chat_widget_message_text"
            placeholder="Write a message..."
          />
          <div className="interactive-input-icon-wrap">
            <svg className="interactive-input-icon icon-send-message">
              <use xlinkHref="#svg-send-message" />
            </svg>
          </div>
          <div className="interactive-input-action">
            <svg className="interactive-input-action-icon icon-cross-thin">
              <use xlinkHref="#svg-cross-thin" />
            </svg>
          </div>
        </div>
      </form>
    </aside>
  );
}

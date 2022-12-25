import React from "react";
import FriendHeader from "./friend/friend.header";
import MessagesHeader from "./messages/messages.header";
import NotifyHeader from "./notify/notify.header";
import SearchHeader from "./search/search.header";
import SettingsHeader from "./setting/settings.header";

export default function Header() {
  return (
    <header className="header">
      <div className="header-actions">
        <div className="header-brand">
          <h1 className="header-brand-text">CK</h1>
        </div>
      </div>
      <SearchHeader />
      <div className="header-actions">
        <div className="action-list dark">
          <FriendHeader />
          <MessagesHeader />
          <NotifyHeader />
        </div>
        <SettingsHeader />
      </div>
    </header>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/header/header";
import PopupNewsfeed from "../../components/popupNewsfeed/popupNewsfeed.component";
import SidebarHeader from "../../components/sidebar/sidebar";
import SidebarMobieHeader from "../../components/sidebar/sidebarMobie";
import SidebarOnHeader from "../../components/sidebar/sidebarOn";
import SidebarItemFriendHeader from "../../components/sidebarListFriend/sidebarItemFriend";
import SidebarListFriendHeader from "../../components/sidebarListFriend/sidebarListFriend";
import MessagesPage from "../messages/messages.page";
import NewsfeedPage from "../newsfeed/newsfeed.page";
import ProfileInfoPage from "../profileInfo/profileInfo.page";
import GroupInfoPage from "../groupInfo/groupInfo.page";

export default function Home() {
  const { showPopupNewsfeed } = useSelector((state) => state.popupNewsfeed);
  return (
    <div>
      {showPopupNewsfeed ? <PopupNewsfeed /> : null}
      <SidebarHeader />
      {/* <SidebarOnHeader /> */}
      {/* <SidebarMobieHeader /> */}
      <SidebarListFriendHeader />
      {/* <SidebarItemFriendHeader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<NewsfeedPage />} />
        <Route path="/profile/:id/*" element={<ProfileInfoPage />} />
        <Route path="/group/*" element={<GroupInfoPage />} />
        <Route path="/message/:idChannel" element={<MessagesPage />} />
      </Routes>
    </div>
  );
}

import React, { useState } from "react";
// React-Icon
import { BsSearch, BsEmojiSmile } from "react-icons/bs";
import { TiPen } from "react-icons/ti";
import { SiOpensourceinitiative } from "react-icons/si";
import {
  IoBuild,
  IoChevronDownOutline,
  IoChevronBackOutline,
} from "react-icons/io5";

export default function CustomMenuSetup() {
  const [showListCustom, setShowListCustom] = useState(false);
  return (
    <div>
      <li className="menu-item">
        <a
          className="menu-item-link menu-item-link-space"
          onClick={() => setShowListCustom(!showListCustom)}
        >
          <IoBuild
            className="menu-item-link-icon icon-newsfeed"
            style={{ width: 30, height: 30, top: 9, left: 9 }}
          />
          Tùy chỉnh đoạn chat
          {showListCustom ? (
            <IoChevronDownOutline className="icon-setup-chat" />
          ) : (
            <IoChevronBackOutline className="icon-setup-chat" />
          )}
        </a>
      </li>
      {showListCustom ? (
        <div className="sidebar-menu-body accordion-content-linked accordion-open">
          <a className="sidebar-menu-link content-center">
            <SiOpensourceinitiative className="icon-setup-chat" />
            Đổi chủ đề
          </a>
          <a className="sidebar-menu-link content-center">
            <BsEmojiSmile className="icon-setup-chat" />
            Thay đổi biểu tượng cảm xúc
          </a>
          <a className="sidebar-menu-link content-center">
            <TiPen className="icon-setup-chat" />
            Chỉnh sửa biệt danh
          </a>
          <a className="sidebar-menu-link content-center">
            <BsSearch className="icon-setup-chat" />
            Tìm kiếm trong cuộc trò chuyện
          </a>
        </div>
      ) : null}
    </div>
  );
}

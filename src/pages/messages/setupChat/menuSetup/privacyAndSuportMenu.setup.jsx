import React, { useState } from "react";
// React-Icon
import {
  IoNotificationsOffOutline,
  IoChevronDownOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import { TbMessageCircleOff } from "react-icons/tb";
import { BsPersonX } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function PrivacyAndSuportMenuSetup() {
  const [showListPrivacyAndSuport, setShowListPrivacyAndSuport] =
    useState(false);
  return (
    <div>
      <li className="menu-item">
        <a
          className="menu-item-link menu-item-link-space"
          onClick={() => setShowListPrivacyAndSuport(!showListPrivacyAndSuport)}
        >
          <MdOutlinePrivacyTip
            className="menu-item-link-icon icon-newsfeed"
            style={{ width: 30, height: 30, top: 9, left: 9 }}
          />
          Quyền riêng tư & hỗ trợ
          {showListPrivacyAndSuport ? (
            <IoChevronDownOutline className="icon-setup-chat" />
          ) : (
            <IoChevronBackOutline className="icon-setup-chat" />
          )}
        </a>
      </li>
      {showListPrivacyAndSuport ? (
        <div className="sidebar-menu-body accordion-content-linked accordion-open">
          <a className="sidebar-menu-link content-center">
            <IoNotificationsOffOutline className="icon-setup-chat" />
            Tắt thông báo
          </a>
          <a className="sidebar-menu-link content-center">
            <TbMessageCircleOff className="icon-setup-chat" />
            Bỏ qua tin nhắn
          </a>
          <a className="sidebar-menu-link content-center">
            <BsPersonX className="icon-setup-chat" />
            Chặn
          </a>
          <a className="sidebar-menu-link content-center">
            <RiDeleteBin5Line className="icon-setup-chat" />
            Xóa đoạn chat
          </a>
        </div>
      ) : null}
    </div>
  );
}

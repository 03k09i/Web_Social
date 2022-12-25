import React, { useState } from "react";
// React-Icon
import {
  IoImagesOutline,
  IoChevronDownOutline,
  IoChevronBackOutline,
} from "react-icons/io5";
import { ImFileText2 } from "react-icons/im";
import { HiOutlineLink } from "react-icons/hi";
import { VscFileSubmodule } from "react-icons/vsc";

export default function VehicleMenuSetup() {
  const [showListVehicle, setShowListVehicle] = useState(false);
  return (
    <div>
      <li className="menu-item">
        <a
          className="menu-item-link menu-item-link-space"
          onClick={() => setShowListVehicle(!showListVehicle)}
        >
          <VscFileSubmodule
            className="menu-item-link-icon icon-newsfeed"
            style={{ width: 30, height: 30, top: 9, left: 9 }}
          />
          File phương tiện, file và liên kết
          {showListVehicle ? (
            <IoChevronDownOutline className="icon-setup-chat" />
          ) : (
            <IoChevronBackOutline className="icon-setup-chat" />
          )}
        </a>
      </li>
      {showListVehicle ? (
        <div className="sidebar-menu-body accordion-content-linked accordion-open">
          <a className="sidebar-menu-link content-center">
            <IoImagesOutline className="icon-setup-chat" />
            File phương tiện
          </a>
          <a className="sidebar-menu-link content-center">
            <ImFileText2 className="icon-setup-chat" />
            File
          </a>
          <a className="sidebar-menu-link content-center">
            <HiOutlineLink className="icon-setup-chat" />
            Liên kết
          </a>
        </div>
      ) : null}
    </div>
  );
}

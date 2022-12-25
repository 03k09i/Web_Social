import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ClickOutside from "../../clickOutside/clickOutside.component";
import ItemMessagesHeader from "./itemMess/itemMess.header";

export default function MessagesHeader() {
  const { listChannel } = useSelector((state) => state.channel);

  const checkOutside = useRef();
  const [colorIconMessage, setColorIconMessage] = useState("primary:#3d3c55");
  const [dropdownMess, setDropdownMess] = useState(false);

  const showListChannel = (listChannel) => {
    let result = null;
    if (listChannel?.length > 0) {
      result = listChannel.map((itemMess, index) => {
        return (
          <ItemMessagesHeader
            key={index}
            itemMess={itemMess}
            setCloseModal={setDropdownMess}
          />
        );
      });
    }
    return result;
  };

  return (
    <div className="action-list-item-wrap" ref={checkOutside}>
      <div
        className="action-list-item header-dropdown-trigger"
        onMouseEnter={() => {
          if (!dropdownMess) {
            setColorIconMessage("primary:#ffffff");
          }
        }}
        onMouseLeave={() => {
          if (!dropdownMess) {
            setColorIconMessage("primary:#3d3c55");
          }
        }}
        onClick={() => setDropdownMess(!dropdownMess)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/uvextprq.json"
          trigger="hover"
          colors={colorIconMessage}
        ></lord-icon>
      </div>
      {dropdownMess ? (
        <div className="dropdown-box header-dropdown">
          <ClickOutside
            checkOutside={checkOutside}
            setCloseModal={setDropdownMess}
          />
          <div className="dropdown-box-header">
            <p className="dropdown-box-header-title">Messages</p>
            {/* <div className="dropdown-box-header-actions">
              <p className="dropdown-box-header-action">Mark all as Read</p>
              <p className="dropdown-box-header-action">Settings</p>
            </div> */}
          </div>
          <div className="dropdown-box-list medium" data-simplebar>
            {showListChannel(listChannel)}
          </div>
          {/* <a
            className="dropdown-box-button primary"
            href="hub-profile-messages.html"
          >
            View all Messages
          </a> */}
        </div>
      ) : null}
    </div>
  );
}

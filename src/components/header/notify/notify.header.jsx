import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ClickOutside from "../../clickOutside/clickOutside.component";
import ItemNotifyHeader from "./itemNotify/itemNotify.header";

export default function NotifyHeader() {
  const { listNotify } = useSelector((state) => state.notify);
  const checkOutside = useRef();
  const [colorIconNotify, setColorIconNotify] = useState("primary:#ffffff");
  const [dropdownNotify, setDropdownNotify] = useState(false);

  const showListNotify = (listNotify) => {
    let result = null;
    if (listNotify?.length > 0) {
      result = listNotify.map((itemNotify, index) => {
        return (
          <ItemNotifyHeader
            key={index}
            itemNotify={itemNotify}
            setCloseModal={setDropdownNotify}
          />
        );
      });
    }
    return result;
  };
  return (
    <div className="action-list-item-wrap" ref={checkOutside}>
      <div
        className="action-list-item unread header-dropdown-trigger"
        onMouseEnter={() => {
          if (!dropdownNotify) {
            setColorIconNotify("primary:#ffffff");
          }
        }}
        onMouseLeave={() => {
          if (!dropdownNotify) {
            setColorIconNotify("primary:#3d3c55");
          }
        }}
        onClick={() => setDropdownNotify(!dropdownNotify)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/ndydpcaq.json"
          trigger="hover"
          colors={colorIconNotify}
        ></lord-icon>
      </div>
      {dropdownNotify ? (
        <div className="dropdown-box header-dropdown">
          <ClickOutside
            checkOutside={checkOutside}
            setCloseModal={setDropdownNotify}
          />
          <div className="dropdown-box-header">
            <p className="dropdown-box-header-title">Notifications</p>
            {/* <div className="dropdown-box-header-actions">
              <p className="dropdown-box-header-action">Mark all as Read</p>
              <p className="dropdown-box-header-action">Settings</p>
            </div> */}
          </div>
          <div className="dropdown-box-list" data-simplebar>
            {showListNotify(listNotify?.notifies)}
          </div>
          {/* <a
            className="dropdown-box-button secondary"
            href="hub-profile-notifications.html"
          >
            View all Notifications
          </a> */}
        </div>
      ) : null}
    </div>
  );
}

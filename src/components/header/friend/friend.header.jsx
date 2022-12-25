import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ClickOutside from "../../clickOutside/clickOutside.component";
import ItemFriendHeader from "./itemFriend/itemFriend.header";

export default function FriendHeader() {
  const { detailUser } = useSelector((state) => state.user);
  const { listFriendRequest } = useSelector((state) => state.friend);
  const checkOutside = useRef();
  const [colorIconNotify, setColorIconNotify] = useState("primary:#3d3c55");
  const [dropdownFriend, setDropdownFriend] = useState(false);

  const showListFriendRequest = (listFriendRequest) => {
    let result = null;
    if (listFriendRequest?.length > 0) {
      result = listFriendRequest
        .filter(
          (itemFriendRequest) =>
            itemFriendRequest.recever._id === detailUser._id &&
            itemFriendRequest.status === 0,
        )
        .map((itemFriendRequest, index) => (
          <ItemFriendHeader key={index} itemFriendRequest={itemFriendRequest} />
        ));
    }
    return result;
  };

  return (
    <div className="action-list-item-wrap" ref={checkOutside}>
      <div
        className="action-list-item header-dropdown-trigger"
        onMouseEnter={() => {
          if (!dropdownFriend) {
            setColorIconNotify("primary:#ffffff");
          }
        }}
        onMouseLeave={() => {
          if (!dropdownFriend) {
            setColorIconNotify("primary:#3d3c55");
          }
        }}
        onClick={() => setDropdownFriend(!dropdownFriend)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/rqskgpey.json"
          trigger="hover"
          colors={colorIconNotify}
        ></lord-icon>
      </div>
      {dropdownFriend ? (
        <div className="dropdown-box header-dropdown">
          <ClickOutside
            checkOutside={checkOutside}
            setCloseModal={setDropdownFriend}
          />
          <div className="dropdown-box-header">
            <p className="dropdown-box-header-title">Friend Requests</p>
            {/* <div className="dropdown-box-header-actions">
              <p className="dropdown-box-header-action">Find Friends</p>
              <p className="dropdown-box-header-action">Settings</p>
            </div> */}
          </div>
          <div className="dropdown-box-list no-hover" data-simplebar>
            {showListFriendRequest(listFriendRequest)}
          </div>
          {/* <a
            className="dropdown-box-button secondary"
            href="hub-profile-requests.html"
          >
            View all Requests
          </a> */}
        </div>
      ) : null}
    </div>
  );
}

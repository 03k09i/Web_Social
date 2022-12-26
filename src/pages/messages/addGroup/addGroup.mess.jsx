import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { Popper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ClickOutside from "../../../components/clickOutside/clickOutside.component";
import ItemSearchHeader from "../../../components/header/search/itemSearch/itemSearch.header";
import {
  addChannelAction,
  getListChannelAction,
} from "../../../store/actions/channel.actions";
import { sendMessageAction } from "../../../store/actions/message.actions";

export default function AddGroupMess(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const { listFriend } = useSelector((state) => state.friend);

  const checkOutside = useRef();
  const [listSearch, setListSearch] = useState(listFriend);
  const [listUserChannel, setListUserChannel] = useState();
  const [mess, setMess] = useState("");
  const [showDropDown, setShowDropDown] = useState();
  const open = Boolean(showDropDown);
  const id = open ? "simple-popper" : undefined;

  const searchHeader = async (e) => {
    const res = listFriend.filter(
      (item) =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1,
    );
    await setListSearch(res);
  };
  const showListFriend = (listSearch) => {
    let result = null;
    if (listSearch?.length > 0) {
      result = listSearch.map((itemSearch, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              let temp = listUserChannel ? listUserChannel : [];
              if (!temp.filter((item) => item._id === itemSearch._id)?.[0]) {
                temp.push(itemSearch);
                setListUserChannel(temp);
              }
            }}
          >
            <ItemSearchHeader itemSearch={itemSearch} addGroup={1} />
          </div>
        );
      });
    }
    return result;
  };
  const showListUserChannel = (listUser) => {
    let result = null;
    if (listUser?.length > 0) {
      result = listUser.map((itemUser, index) => {
        return (
          <div
            key={index}
            style={{
              height: 60,
              alignItems: "center",
              display: "flex",
              margin: 10,
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <div className="user-status-avatar">
                <div className="user-avatar small no-outline online">
                  <div className="user-avatar-content">
                    <img
                      src={
                        itemUser.avatar ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                      }
                      className="image-avatar-40"
                    />
                  </div>
                </div>
              </div>
              <p className="user-status-title" style={{ marginLeft: 10 }}>
                <span className="bold">{itemUser.name}</span>
              </p>
            </div>
            <TiDelete
              style={{ width: 25, height: 25, right: 0 }}
              onClick={() => {
                let result = listUserChannel.filter(
                  (item) => item._id !== itemUser._id,
                );
                setListUserChannel(result);
              }}
            />
          </div>
        );
      });
    }
    return result;
  };
  const sendMess = async () => {
    let name = "";
    const list_user = listUserChannel.map((item, index) => {
      if (index === listUserChannel.length - 1) {
        name = name + item.name;
      } else {
        name = name + item.name + ", ";
      }
      return item._id;
    });
    const res = await dispatch(addChannelAction({ list_user, name }));
    await dispatch(sendMessageAction(res._id, mess));
    socket.emit("sendMessage", {
      message: { mess, idChannel: res._id },
      room: res._id,
    });
    dispatch(getListChannelAction());
    setMess("");
    navigate(`/message/${res._id}`);
  };
  return (
    <div className="chat-widget" style={{ width: "70%" }}>
      <div
        style={{ display: "flex", padding: 20, alignItems: "center" }}
        ref={checkOutside}
      >
        Đến:{" "}
        <input
          type="text"
          placeholder="Search here"
          onFocus={(event) => setShowDropDown(event.currentTarget)}
          onChange={(e) => searchHeader(e)}
        />
        <Popper
          id={id}
          open={open}
          anchorEl={showDropDown}
          placement="bottom"
          style={{ zIndex: 10000 }}
        >
          <div
            className="dropdown-box padding-bottom-small header-search-dropdown"
            style={{ transform: "translate(-50%, 7px)" }}
          >
            <ClickOutside
              checkOutside={checkOutside}
              setCloseModal={setShowDropDown}
            />
            {listSearch?.length > 0 ? null : (
              <div className="dropdown-box-category">
                <p className="dropdown-box-category-title">
                  Không tìm thấy thông tin
                </p>
              </div>
            )}
            {showListFriend(listSearch)}
          </div>
        </Popper>
      </div>
      <div
        className="chat-widget-conversation scroll-bar"
        style={{
          height: window.innerHeight - 120 - 87.8 - 92,
          padding: 10,
          backgroundColor: "#f3f2f7",
          position: "relative",
          overflowY: "scroll",
        }}
      >
        {showListUserChannel(listUserChannel)}
      </div>
      <form
        className="chat-widget-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendMess();
        }}
      >
        <div className="form-row split">
          <div className="form-item">
            <div className="interactive-input small">
              <input
                type="text"
                value={mess}
                placeholder="Write a message..."
                onChange={(e) => setMess(e.target.value)}
              />
              <div className="interactive-input-icon-wrap actionable">
                <div
                  className="tooltip-wrap text-tooltip-tft"
                  data-title="Send Photo"
                >
                  <svg className="interactive-input-icon icon-friend">
                    <use xlinkHref="#svg-friend" />
                  </svg>
                </div>
              </div>
              <div className="interactive-input-action">
                <svg className="interactive-input-action-icon icon-cross-thin">
                  <use xlinkHref="#svg-cross-thin" />
                </svg>
              </div>
            </div>
          </div>
          <div className="form-item auto-width">
            <p className="button primary padded" onClick={() => sendMess(mess)}>
              <svg className="button-icon no-space icon-send-message">
                <use xlinkHref="#svg-send-message" />
              </svg>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

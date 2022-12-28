import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import ItemFriend from "./friendItem/itemFriend";
import callApi from "../../../utils/callApi";

export default function friendList() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { listFriendRequest } = useSelector((state) => state.friend);
  const [status, setStatus] = useState(1);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await callApi(`user/getfiend`, "GET", "", {
        Authorization: `Bearer ${Cookies.get("token")}`,
      });
      await setListUser(res?.data);
    };
    fetchData();
  }, []);
  const changeStatus = async (page) => {
    await setStatus(page);
    if (page === 1) {
      const res = await callApi(`user/getfiend`, "GET", "", {
        Authorization: `Bearer ${Cookies.get("token")}`,
      });
      await setListUser(res?.data);
    }
    if (page === 2) {
      await setListUser(listFriendRequest);
    }
  };
  const unfriend = async (id) => {
    const res1 = await callApi(`request/delete/${id}`, "DELETE", "", {
      Authorization: `Bearer ${Cookies.get("token")}`,
    });
    const res = await callApi(`user/getfiend`, "GET", "", {
      Authorization: `Bearer ${Cookies.get("token")}`,
    });
    await setListUser(res?.data);
  };
  console.log(listUser);
  const showListUser = (listUser) => {
    let result = null;
    if (listUser?.length > 0) {
      if (status === 1) {
        result = listUser.map((itemUser, index) => {
          return (
            <ItemFriend
              key={index}
              status={status}
              itemUser={itemUser}
              unfriend={unfriend}
            />
          );
        });
      } else if (status === 2) {
        result = listUser
          .filter(
            (itemUser) =>
              itemUser?.recever?._id === detailUser?._id &&
              itemUser?.status === 0,
          )
          .map((itemUser, index) => (
            <ItemFriend key={index} status={status} itemUser={itemUser} />
          ));
      }
    }
    return result;
  };
  return (
    <div className="contentFriendPage">
      <div className="grid grid-3-9">
        <div className="grid-column widget-box widget-box-friend">
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-item-link" onClick={() => changeStatus(1)}>
                Ban be
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" onClick={() => changeStatus(2)}>
                Loi moi ket ban
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" onClick={() => changeStatus(3)}>
                Goi y ket ban
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" onClick={() => changeStatus(4)}>
                Tim ban be moi
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-column widget-box widget-box-content-friend">
          <div>
            <div className="interactive-input small">
              <input
                type="text"
                id="chat-widget-search-2"
                name="chat_widget_search_2"
                placeholder="Search Messages..."
              />
              <div className="interactive-input-icon-wrap">
                <svg className="interactive-input-icon icon-magnifying-glass">
                  <use xlinkHref="#svg-magnifying-glass" />
                </svg>
              </div>
              <div className="interactive-input-action">
                <svg className="interactive-input-action-icon icon-cross-thin">
                  <use xlinkHref="#svg-cross-thin" />
                </svg>
              </div>
            </div>
            <div className="content-list-friend grid grid-6-6">
              {showListUser(listUser)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

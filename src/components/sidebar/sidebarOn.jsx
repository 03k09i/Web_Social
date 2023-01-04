import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addShortCutAction,
  getShortCutAction,
  deleteShortCutAction,
} from "../../store/actions/shortcut.actions";

export default function SidebarOnHeader() {
  const { detailUser } = useSelector((state) => state.user);

  //redux
  const dispatch = useDispatch();
  const [listShortcut, setShortcut] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res3 = await dispatch(getShortCutAction());
      await setShortcut(res3);
    };
    fetchData();
  }, [dispatch]);

  return (
    <nav
      id="navigation-widget"
      className="navigation-widget navigation-widget1 navigation-widget-desktop sidebar sidebar1 left delayed"
      data-simplebar
    >
      <ul className="menu menu1">
        <li className="menu-item">
          <NavLink
            className="menu-item-link menu-item-rela"
            to={`/profile/${detailUser._id}`}
          >
            <div className="menu-item-link-icon icon-overview">
              <img
                className="image-avatar-40"
                style={{ marginTop: "-30px", marginLeft: "-2px" }}
                src={
                  detailUser?.avatar?.link ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                alt="error"
              />
            </div>
            {detailUser.name}
          </NavLink>
        </li>
      </ul>

      <div className="lineX"></div>

      <ul className="menu menu2">
        <p
          style={{
            fontWeight: "bold",
            padding: "0 16px",
            margin: "10px 10px 10px 0",
          }}
        >
          Truy cập nhanh
        </p>
        {listShortcut.map((itemShortcut, index) => (
          <li className="menu-item" key={index}>
            <NavLink
              className="menu-item-link"
              to={`/profile/${itemShortcut.shortcut._id}`}
            >
              <div className="menu-item-link-icon icon-overview">
                <img
                  className="image-avatar-40"
                  style={{ marginTop: "-30px", marginLeft: "-2px" }}
                  src={
                    itemShortcut?.shortcut?.avatar?.link ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                  }
                  alt="error"
                />
              </div>
              {itemShortcut?.shortcut?.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

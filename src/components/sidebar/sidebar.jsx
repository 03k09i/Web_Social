import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

export default function SidebarHeader() {
  const { pathname } = useLocation();
  const { detailUser } = useSelector((state) => state.user);
  return (
    <nav
      id="navigation-widget-small"
      className="navigation-widget navigation-widget-desktop closed sidebar left delayed"
    >
      <NavLink
        className="user-avatar small no-outline"
        to={`/profile/${detailUser?._id}`}
      >
        <div className="user-avatar-content">
          <img
            src={
              detailUser?.avatar?.link ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
            }
            className="image-avatar-40"
          />
        </div>
      </NavLink>
      <ul className="menu small">
        <li className="menu-item active">
          <NavLink
            className="menu-item-link text-tooltip-tfr"
            to={"/"}
            data-title="Newsfeed"
          >
            <svg className="menu-item-link-icon icon-newsfeed">
              <use xlinkHref="#svg-newsfeed" />
            </svg>
          </NavLink>
          <div className="xm-tooltip">
            <p className="xm-tooltip-text">Newsfeed</p>
          </div>
        </li>
        {/* <li className="menu-item">
          <a
            className="menu-item-link text-tooltip-tfr"
            href="groups.html"
            data-title="Groups"
          >
            <svg className="menu-item-link-icon icon-group">
              <use xlinkHref="#svg-profile" />
            </svg>
          </a>
          <div className="xm-tooltip">
            <p className="xm-tooltip-text">Profile Info</p>
          </div>
        </li> */}
        {/* <li className="menu-item">
          <NavLink
            className="menu-item-link text-tooltip-tfr"
            to={"/message"}
            data-title="Members"
          >
            <svg className="menu-item-link-icon icon-members">
              <use xlinkHref="#svg-messages" />
            </svg>
          </NavLink>
          <div className="xm-tooltip">
            <p className="xm-tooltip-text">Messages</p>
          </div>
        </li>
        <li className="menu-item">
          <a
            className="menu-item-link text-tooltip-tfr"
            href="streams.html"
            data-title="Streams"
          >
            <svg className="menu-item-link-icon icon-streams">
              <use xlinkHref="#svg-streams" />
            </svg>
          </a>
        </li>
        <li className="menu-item">
          <a
            className="menu-item-link text-tooltip-tfr"
            href="forums.html"
            data-title="Forums"
          >
            <svg className="menu-item-link-icon icon-forums">
              <use xlinkHref="#svg-forums" />
            </svg>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function SidebarOnHeader() {
  const { detailUser } = useSelector((state) => state.user);
  return (
    <nav
      id="navigation-widget"
      className="navigation-widget navigation-widget1 navigation-widget-desktop sidebar sidebar1 left delayed"
      data-simplebar
    >
      {/* <figure className="navigation-widget-cover liquid">
        <img src={"/img/cover/01.jpg"} alt="cover-01" />
      </figure>
      <div className="user-short-description">
        <a
          className="user-short-description-avatar user-avatar medium"
          href="profile-timeline.html"
        >
          <img src={"/img/landing/mylove2.jpg"} className="image-avatar-120" />
        </a>
        <p className="user-short-description-title">
          <a href="profile-timeline.html">Kiệt Phan</a>
        </p>
        <p className="user-short-description-text">
          <a href="#">www.gamehuntress.com</a>
        </p>
      </div> */}
      {/* <div className="user-stats1">
        <div className="user-stat">
          <p className="user-stat-title">930</p>
          <p className="user-stat-text">posts</p>
        </div>
        <div className="user-stat">
          <p className="user-stat-title">82</p>
          <p className="user-stat-text">friends</p>
        </div>
        <div className="user-stat">
          <p className="user-stat-title">5.7k</p>
          <p className="user-stat-text">visits</p>
        </div>
        
      </div> */}
      <ul className="menu menu1">
        <li className="menu-item">
          <a className="menu-item-link menu-item-rela" href="newsfeed.html">
            <div className="menu-item-link-icon icon-overview">
              <img className="imgAvatar" src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"/>
            </div>
            {detailUser.name}
          </a>
        </li>
        </ul>
        
        <div className="lineX"></div>
        
        <ul className="menu menu2">
          <p style={{fontWeight: "bold", padding:"0 16px", margin: "10px 10px 10px 0"}}>Truy cap nhanh</p>
        <li className="menu-item">
          <a className="menu-item-link" href="overview.html">
            <svg className="menu-item-link-icon icon-overview">
              <use xlinkHref="#svg-overview" />
            </svg>
            Overview
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="groups.html">
            <svg className="menu-item-link-icon icon-group">
              <use xlinkHref="#svg-group" />
            </svg>
            Groups
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="members.html">
            <svg className="menu-item-link-icon icon-members">
              <use xlinkHref="#svg-members" />
            </svg>
            Members
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="badges.html">
            <svg className="menu-item-link-icon icon-badges">
              <use xlinkHref="#svg-badges" />
            </svg>
            Badges
          </a>
        </li>
      </ul>
    </nav>
  );
}

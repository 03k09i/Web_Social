import React from "react";

export default function SidebarOnHeader() {
  return (
    <nav
      id="navigation-widget"
      className="navigation-widget navigation-widget-desktop sidebar left delayed"
      data-simplebar
    >
      <figure className="navigation-widget-cover liquid">
        <img
          src={process.env.PUBLIC_URL + "/img/cover/01.jpg"}
          alt="cover-01"
        />
      </figure>
      <div className="user-short-description">
        <a
          className="user-short-description-avatar user-avatar medium"
          href="profile-timeline.html"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
            className="image-avatar-120"
          />
        </a>
        <p className="user-short-description-title">
          <a href="profile-timeline.html">Kiệt Phan</a>
        </p>
        <p className="user-short-description-text">
          <a href="#">www.gamehuntress.com</a>
        </p>
      </div>
      <div className="user-stats">
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
      </div>
      <ul className="menu">
        <li className="menu-item">
          <a className="menu-item-link" href="newsfeed.html">
            <svg className="menu-item-link-icon icon-newsfeed">
              <use xlinkHref="#svg-newsfeed" />
            </svg>
            Newsfeed
          </a>
        </li>
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
        <li className="menu-item">
          <a className="menu-item-link" href="quests.html">
            <svg className="menu-item-link-icon icon-quests">
              <use xlinkHref="#svg-quests" />
            </svg>
            Quests
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="streams.html">
            <svg className="menu-item-link-icon icon-streams">
              <use xlinkHref="#svg-streams" />
            </svg>
            Streams
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="events.html">
            <svg className="menu-item-link-icon icon-events">
              <use xlinkHref="#svg-events" />
            </svg>
            Events
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="forums.html">
            <svg className="menu-item-link-icon icon-forums">
              <use xlinkHref="#svg-forums" />
            </svg>
            Forums
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-item-link" href="marketplace.html">
            <svg className="menu-item-link-icon icon-marketplace">
              <use xlinkHref="#svg-marketplace" />
            </svg>
            Marketplace
          </a>
        </li>
      </ul>
    </nav>
  );
}

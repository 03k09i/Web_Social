import React from "react";
import { NavLink } from "react-router-dom";

export default function SectionNavProfile() {
  return (
    <nav className="section-navigation">
      <div id="section-navigation-slider" className="section-menu">
        <NavLink className="section-menu-item" to={""}>
          <svg className="section-menu-item-icon icon-timeline">
            <use xlinkHref="#svg-newsfeed" />
          </svg>

          <p className="section-menu-item-text">Newfeeds</p>
        </NavLink>
        <NavLink className="section-menu-item" to="infoProfile">
          <svg className="section-menu-item-icon icon-profile">
            <use xlinkHref="#svg-profile" />
          </svg>

          <p className="section-menu-item-text">Info</p>
        </NavLink>
        <NavLink className="section-menu-item" to="friendsProfile">
          <svg className="section-menu-item-icon icon-friend">
            <use xlinkHref="#svg-friend" />
          </svg>

          <p className="section-menu-item-text">Friends</p>
        </NavLink>

        {/* <NavLink className="section-menu-item" to="groupsProfile">
          <svg className="section-menu-item-icon icon-group">
            <use xlinkHref="#svg-group" />
          </svg>

          <p className="section-menu-item-text">Groups</p>
        </NavLink> */}

        <NavLink className="section-menu-item" to="photosProfile">
          <svg className="section-menu-item-icon icon-photos">
            <use xlinkHref="#svg-photos" />
          </svg>

          <p className="section-menu-item-text">Photos</p>
        </NavLink>

        {/* <a className="section-menu-item" href="profile-videos.html">
          <svg className="section-menu-item-icon icon-videos">
            <use xlinkHref="#svg-videos" />
          </svg>

          <p className="section-menu-item-text">Videos</p>
        </a>

        <a className="section-menu-item" href="profile-badges.html">
          <svg className="section-menu-item-icon icon-badges">
            <use xlinkHref="#svg-badges" />
          </svg>

          <p className="section-menu-item-text">Badges</p>
        </a>

        <a className="section-menu-item" href="profile-stream.html">
          <svg className="section-menu-item-icon icon-streams">
            <use xlinkHref="#svg-streams" />
          </svg>

          <p className="section-menu-item-text">Streams</p>
        </a>

        <a className="section-menu-item" href="profile-blog.html">
          <svg className="section-menu-item-icon icon-blog-posts">
            <use xlinkHref="#svg-blog-posts" />
          </svg>

          <p className="section-menu-item-text">Blog</p>
        </a>

        <a className="section-menu-item" href="profile-forum.html">
          <svg className="section-menu-item-icon icon-forum">
            <use xlinkHref="#svg-forum" />
          </svg>

          <p className="section-menu-item-text">Forum</p>
        </a>

        <a className="section-menu-item" href="profile-store.html">
          <svg className="section-menu-item-icon icon-store">
            <use xlinkHref="#svg-store" />
          </svg>

          <p className="section-menu-item-text">Store</p>
        </a> */}
      </div>

      <div id="section-navigation-slider-controls" className="slider-controls">
        <div className="slider-control left">
          <svg className="slider-control-icon icon-small-arrow">
            <use xlinkHref="#svg-small-arrow" />
          </svg>
        </div>

        <div className="slider-control right">
          <svg className="slider-control-icon icon-small-arrow">
            <use xlinkHref="#svg-small-arrow" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

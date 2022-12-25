import React from "react";
import ListAvatar from "../../../../components/listAvatar/listAvatar.component";

export default function GroupsItem() {
  return (
    <div className="user-preview">
      <figure className="user-preview-cover liquid">
        <img
          src={process.env.PUBLIC_URL + "/img/cover/29.jpg"}
          alt="cover-29"
        />
      </figure>

      <div className="user-preview-info">
        <div className="tag-sticker">
          <svg className="tag-sticker-icon icon-public">
            <use xlinkHref="#svg-public" />
          </svg>
        </div>

        <div className="user-short-description">
          <a
            className="user-short-description-avatar user-avatar medium no-stats"
            href="group-timeline.html"
          >
            <img
              src={process.env.PUBLIC_URL + "/img/landing/mylove2.jpg"}
              className="image-avatar-120 avatar-border-white"
              alt="error"
            />
          </a>

          <p className="user-short-description-title">
            <a href="group-timeline.html">Cosplayers of the World</a>
          </p>

          <p className="user-short-description-text">All cosplayers welcome!</p>
        </div>

        <div className="user-stats">
          <div className="user-stat">
            <p className="user-stat-title">139</p>

            <p className="user-stat-text">members</p>
          </div>

          <div className="user-stat">
            <p className="user-stat-title">105</p>

            <p className="user-stat-text">posts</p>
          </div>

          <div className="user-stat">
            <p className="user-stat-title">7.3k</p>

            <p className="user-stat-text">visits</p>
          </div>
        </div>

        <ListAvatar />

        <div className="user-preview-actions">
          <p className="button secondary full">
            <svg className="button-icon icon-join-group">
              <use xlinkHref="#svg-join-group" />
            </svg>
            Join Group!
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function FriendItem(props) {
  const { itemFriend } = props;
  return (
    <NavLink className="user-preview small" to={`/profile/${itemFriend._id}`}>
      <figure className="user-preview-cover liquid">
        <img src={"/img/cover/04.jpg"} alt="cover-04" />
      </figure>

      <div className="user-preview-info">
        <div className="user-short-description small">
          <a className="user-short-description-avatar user-avatar" href="#">
            <img
              src={
                itemFriend?.avatar ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
              }
              className="image-avatar-100 avatar-border-white"
              alt="error"
            />
          </a>
          <p className="user-short-description-title">
            <a href="#">{itemFriend.name}</a>
          </p>
          {/* <p className="user-short-description-text">
            <a href="#">www.store.com/nekoprints</a>
          </p> */}
        </div>
        {/* <div className="user-stats">
          <div className="user-stat">
            <p className="user-stat-title">{itemFriend.post}</p>

            <p className="user-stat-text">posts</p>
          </div>

          <div className="user-stat">
            <p className="user-stat-title">{itemFriend.friend}</p>

            <p className="user-stat-text">friends</p>
          </div>

          <div className="user-stat">
            <p className="user-stat-title">3.9k</p>

            <p className="user-stat-text">visits</p>
          </div>
        </div> */}

        {/* <div className="social-links small">
          <a className="social-link small twitter" href="#">
            <svg className="social-link-icon icon-twitter">
              <use xlinkHref="#svg-twitter" />
            </svg>
          </a>

          <a className="social-link small instagram" href="#">
            <svg className="social-link-icon icon-instagram">
              <use xlinkHref="#svg-instagram" />
            </svg>
          </a>

          <a className="social-link small twitch" href="#">
            <svg className="social-link-icon icon-twitch">
              <use xlinkHref="#svg-twitch" />
            </svg>
          </a>

          <a className="social-link small discord" href="#">
            <svg className="social-link-icon icon-discord">
              <use xlinkHref="#svg-discord" />
            </svg>
          </a>
        </div> */}
      </div>

      {/* <div className="user-preview-footer">
        <div className="user-preview-footer-action">
          <p className="button void void-secondary">
            <svg className="button-icon icon-add-friend">
              <use xlinkHref="#svg-add-friend" />
            </svg>
          </p>
        </div>

        <div className="user-preview-footer-action">
          <p className="button void void-primary">
            <svg className="button-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>
          </p>
        </div>
      </div> */}
    </NavLink>
  );
}

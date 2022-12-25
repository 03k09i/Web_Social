import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemSearchHeader(props) {
  const { itemSearch, addGroup } = props;
  return (
    <div className="dropdown-box-list small no-scroll">
      <NavLink
        className="dropdown-box-list-item"
        to={addGroup ? null : `/profile/${itemSearch._id}`}
      >
        <div className="user-status notification">
          <div className="user-status-avatar">
            <div className="user-avatar small no-outline">
              <div className="user-avatar-content">
                <img
                  src={
                    addGroup
                      ? itemSearch?.avatar
                      : itemSearch?.avatar?.link ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                  }
                  className="image-avatar-40"
                  alt="error"
                />
              </div>
            </div>
          </div>
          <p className="user-status-title">
            <span className="bold">{itemSearch.name}</span>
          </p>
          {addGroup ? null : (
            <p className="user-status-text">1 friends in common</p>
          )}
          <div className="user-status-icon">
            <svg className="icon-friend">
              <use xlinkHref="#svg-friend" />
            </svg>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

import React from "react";
import moment from "moment";

export default function ItemNotifyHeader(props) {
  const { itemNotify } = props;
  return (
    <div className="dropdown-box-list-item">
      <div className="user-status notification">
        <a className="user-status-avatar" href="profile-timeline.html">
          <div className="user-avatar small no-outline">
            <div className="user-avatar-content">
              <img
                src={
                  itemNotify?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                className="image-avatar-40"
              />
            </div>
          </div>
        </a>
        <p className="user-status-title">
          <a className="bold" href="profile-timeline.html">
            {itemNotify?.user?.name}
          </a>{" "}
          {itemNotify?.text}{" "}
          {itemNotify?.content ? (
            <img
              className="reaction"
              src={`/img/reaction/${itemNotify?.content}.png`}
              alt={`reaction-${itemNotify?.content}`}
            />
          ) : null}{" "}
          {/* <a className="highlighted" href="profile-timeline.html">
            status update
          </a> */}
        </p>
        <p className="user-status-timestamp">
          {moment(itemNotify.createdAt).fromNow()}
        </p>
        <div className="user-status-icon">
          {itemNotify?.content ? (
            <svg className="icon-thumbs-up">
              <use xlinkHref="#svg-thumbs-up" />
            </svg>
          ) : (
            <svg className="post-option-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

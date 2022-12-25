import React from "react";
import { useDispatch } from "react-redux";
import {
  acceptFriendAction,
  rejectFriendAction,
} from "../../../../store/actions/friend.actions";

export default function ItemFriendHeader(props) {
  //redux
  const dispatch = useDispatch();
  // parameters
  const { itemFriendRequest } = props;
  // function
  const acceptFriend = async () => {
    await dispatch(acceptFriendAction(itemFriendRequest._id));
  };

  const rejectInvitation = async () => {
    await dispatch(rejectFriendAction(itemFriendRequest._id));
  };

  return (
    <div className="dropdown-box-list-item">
      <div className="user-status request">
        <a className="user-status-avatar" href="profile-timeline.html">
          <div className="user-avatar small no-outline">
            <div className="user-avatar-content">
              <img
                src={
                  itemFriendRequest?.sender?.avatar?.link ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                className="image-avatar-40"
                alt="error"
              />
            </div>
          </div>
        </a>
        <p className="user-status-title">
          <a className="bold" href="profile-timeline.html">
            {itemFriendRequest?.sender?.name}
          </a>
        </p>
        <p className="user-status-text">6 friends in common</p>
        <div className="action-request-list">
          <div className="action-request accept" onClick={() => acceptFriend()}>
            <svg className="action-request-icon icon-add-friend">
              <use xlinkHref="#svg-add-friend" />
            </svg>
          </div>
          <div
            className="action-request decline"
            onClick={() => rejectInvitation()}
          >
            <svg className="action-request-icon icon-remove-friend">
              <use xlinkHref="#svg-remove-friend" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

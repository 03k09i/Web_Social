import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  acceptFriendAction,
  rejectFriendAction,
  getListFriendRequestAction,
} from "../../../../store/actions/friend.actions";

export default function ItemFriendHeader(props) {
  //redux
  const dispatch = useDispatch();
  // parameters
  const { itemFriendRequest } = props;
  // function
  const acceptFriend = async () => {
    await dispatch(acceptFriendAction(itemFriendRequest._id));
    await dispatch(getListFriendRequestAction());
  };

  const rejectInvitation = async () => {
    await dispatch(rejectFriendAction(itemFriendRequest._id));
    await dispatch(getListFriendRequestAction());
  };

  return (
    <div className="dropdown-box-list-item">
      <div className="user-status request">
        <NavLink
          className="user-status-avatar"
          to={`/profile/${itemFriendRequest?.sender?._id}`}
        >
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
        </NavLink>
        <p className="user-status-title">
          <NavLink
            className="bold"
            to={`/profile/${itemFriendRequest?.sender?._id}`}
          >
            {itemFriendRequest?.sender?.name}
          </NavLink>
        </p>
        {/* <p className="user-status-text">
          {itemFriendRequest?.sender?.user?.length} friends in common
        </p> */}
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

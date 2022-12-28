import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptFriendAction,
  getListFriendRequestAction,
  rejectFriendAction,
} from "../../../../store/actions/friend.actions";

export default function ItemFriend(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const { itemUser, status, unfriend } = props;
  const acceptFriend = async () => {
    const res = await dispatch(acceptFriendAction(itemUser._id));
    await dispatch(getListFriendRequestAction());
    socket.emit("acceptfriendrequest", {
      request: { recever: itemUser.sender._id },
      user: detailUser,
    });
  };
  const rejectFriend = async () => {
    const res = await dispatch(rejectFriendAction(itemUser._id));
    await dispatch(getListFriendRequestAction());
    socket.emit("acceptfriendrequest", {
      request: { recever: itemUser.sender._id },
      user: detailUser,
    });
  };
  return (
    <div className="grid-column">
      <div className="item-friend">
        <div className=" img-friend">
          <img
            src={
              status === 1
                ? itemUser?.avatar
                : itemUser?.sender.avatar.link ||
                  "https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"
            }
          />
        </div>
        <div className=" info-friend">
          <div className="content-info-friend">
            <p>{status === 1 ? itemUser.name : itemUser.sender.name}</p>
          </div>
        </div>
        <div className=" status-friend">
          {status === 1 ? (
            <Button
              variant="contained"
              onClick={() => {
                unfriend(itemUser._id);
              }}
            >
              Hủy kết bạn
            </Button>
          ) : (
            <>
              <Button variant="contained" onClick={() => acceptFriend()}>
                Accept
              </Button>
              <Button variant="outlined" onClick={() => rejectFriend()}>
                Reject
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

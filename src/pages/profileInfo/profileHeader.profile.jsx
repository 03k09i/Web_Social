import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { RiMessengerLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import UpLoadImage from "../../components/upLoadImage/upLoadImage.component";
import {
  acceptFriendAction,
  addFriendAction,
  cancelFriendAction,
  rejectFriendAction,
  getListFriendRequestAction,
} from "../../store/actions/friend.actions";
import { getInfoFriendAction } from "../../store/actions/user.actions";
import { checkError } from "../../store/actions/showAlert.actions";

export default function ProfileHeader() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { listFriendRequest } = useSelector((state) => state.friend);
  const { socket } = useSelector((state) => state.socket);
  const { id } = useParams();
  const [infoUser, setInfoUser] = useState();
  const [idChannel, setIdChannel] = useState();
  const [image, setImage] = useState();
  const [checkFriend, setcheckFriend] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getInfoFriendAction(id));
      await setInfoUser(res?.data);
      await setIdChannel(res?.channel);
      await setImage(res?.data?.avatar?.link);
      await setcheckFriend(
        listFriendRequest.find(
          (item) =>
            (item.recever._id === id && item.sender._id === detailUser._id) ||
            (item.sender._id === id && item.recever._id === detailUser._id),
        ),
      );
    };
    fetchData();
  }, [id, listFriendRequest, dispatch]);

  const addFriend = async () => {
    Swal.fire({
      title: "Wait a minute",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        let res = "";
        if (checkFriend) {
          if (checkFriend.status === 1) {
          } else {
            if (checkFriend.sender._id === id) {
              res = await dispatch(acceptFriendAction(checkFriend._id));
              socket.emit("acceptfriendrequest", {
                request: { recever: infoUser._id },
                user: detailUser,
              });
            } else {
              if (checkFriend.recever._id === detailUser._id) {
                res = await dispatch(rejectFriendAction(checkFriend._id));
              } else {
                res = await dispatch(cancelFriendAction(checkFriend._id));
              }
            }
          }
        } else {
          res = await dispatch(addFriendAction(id));
          socket.emit("sendfriendrequest", {
            request: { recever: infoUser._id },
            user: detailUser,
          });
        }
        await dispatch(getListFriendRequestAction());
        await dispatch(checkError(res));
      },
    });
  };

  return (
    <div className="profile-header">
      <figure className="profile-header-cover liquid">
        <img src={"/img/landing/mylove2.jpg"} alt="cover-01" />
      </figure>

      <div className="profile-header-info">
        <div className="user-short-description big">
          <a
            className="user-short-description-avatar user-avatar big"
            href="profile-timeline.html"
            style={{ height: 148 }}
          >
            <img
              src={
                image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
              }
              className="image-avatar-148 avatar-border-white"
              alt="error"
            />
            <UpLoadImage setImage={setImage} />
          </a>

          <a
            className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium"
            href="profile-timeline.html"
          >
            <img
              src={
                image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
              }
              className="image-avatar-120 avatar-border-white"
              alt="error"
            />
          </a>

          <p className="user-short-description-title">
            <a href="#/">{infoUser?.name}</a>
          </p>

          {/* <p className="user-short-description-text">
            <a href="#/">Đẹp trai siêu cấp vip pro</a>
          </p> */}
        </div>

        {/* <div className="user-stats">
          <div className="user-stat big">
            <p className="user-stat-title">930</p>

            <p className="user-stat-text">posts</p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">82</p>

            <p className="user-stat-text">friends</p>
          </div>

          <div className="user-stat big">
            <p className="user-stat-title">5.7k</p>

            <p className="user-stat-text">visits</p>
          </div>
        </div> */}
        {detailUser._id !== id ? (
          <div className="profile-header-info-actions">
            <p
              className="profile-header-info-action button secondary center"
              onClick={() => addFriend()}
            >
              {checkFriend ? (
                checkFriend.status === 1 ? (
                  <BsPeople style={{ width: 20, height: 20, marginRight: 5 }} />
                ) : checkFriend.sender._id === id ? (
                  <svg
                    className="action-request-icon icon-add-friend"
                    style={{ fill: "#fff", marginRight: 5 }}
                  >
                    <use xlinkHref="#svg-add-friend" />
                  </svg>
                ) : (
                  <svg
                    className="action-request-icon icon-remove-friend"
                    style={{ fill: "#fff", marginRight: 5 }}
                  >
                    <use xlinkHref="#svg-remove-friend" />
                  </svg>
                )
              ) : (
                <svg
                  className="action-request-icon icon-add-friend"
                  style={{ fill: "#fff", marginRight: 5 }}
                >
                  <use xlinkHref="#svg-add-friend" />
                </svg>
              )}

              <span className="hide-text-mobile">
                {checkFriend
                  ? checkFriend.status === 1
                    ? "Bạn bè"
                    : checkFriend.sender._id === id
                    ? "Chấp nhận"
                    : checkFriend.recever._id === detailUser._id
                    ? "Từ chối"
                    : "Hủy lời mời"
                  : "Thêm bạn bè"}
              </span>
            </p>

            {checkFriend?.status === 1 ? (
              <NavLink
                className="profile-header-info-action button primary center"
                to={`/message/${idChannel}`}
              >
                <RiMessengerLine
                  style={{ width: 20, height: 20, marginRight: 5 }}
                />
                <span className="hide-text-mobile">Nhắn tin</span>
              </NavLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../reaction/reactionSmall.component";
import { reactCommentAction } from "../../../store/actions/react.actions";
import {
  deleteCommentAction,
  getListCommentAction,
} from "../../../store/actions/comment.actions";
import { addNotifyAction } from "../../../store/actions/notify.actions";

export default function ItemCommentReply(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const { itemReply, setShowCommentChild, setListComment, itemPost } = props;
  const [showReaction, setShowReaction] = useState(false);
  const [setupComment, setSetupComment] = useState(false);
  const [checkReact, setCheckReact] = useState(
    itemReply.react.filter((id) => id === detailUser._id)?.[0],
  );
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const open1 = Boolean(setupComment);
  const id1 = open1 ? "simple-popper" : undefined;
  const reactComment = async () => {
    await dispatch(reactCommentAction(itemReply._id));
    await setCheckReact(!checkReact);
    if (!checkReact && detailUser._id !== itemReply.user._id) {
      await dispatch(
        addNotifyAction({
          receiver: [itemReply.user._id],
          text: `Đã thả cảm xúc bình luận của bạn: ${
            itemReply?.content.length > 15
              ? `${itemReply?.content.slice(0, 20)}...`
              : itemReply?.content
          }`,
          content: "love",
          image: detailUser?.avatar?.link,
        }),
      );
      socket.emit("likecomment", {
        comment: itemReply,
        user: detailUser,
        status: checkReact ? 0 : 1,
      });
    }
  };

  const deleteComment = async () => {
    await dispatch(deleteCommentAction(itemReply._id));
    const res = await dispatch(getListCommentAction(itemPost._id));
    await setListComment(res?.comment);
  };

  return (
    <div className="post-comment unread" style={{ left: "-50px" }}>
      <a className="user-avatar small no-outline" href="profile-timeline.html">
        <div className="user-avatar-content">
          <img
            src={
              itemReply?.user?.avatar?.link ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
            }
            className="image-avatar-40"
            alt="error"
          />
        </div>
      </a>
      <p className="post-comment-text">
        <NavLink
          className="post-comment-text-author"
          to={`/profile/${itemReply?.user?._id}`}
        >
          {itemReply.user.name}
        </NavLink>
        {itemReply.content}
      </p>
      <div className="content-actions">
        <div className="content-action">
          {itemReply?.react?.length < 0 ? (
            <div className="meta-line">
              <div className="meta-line-list reaction-item-list small">
                <div className="reaction-item">
                  <img
                    className="reaction-image reaction-item-dropdown-trigger"
                    src={"/img/reaction/happy.png"}
                    alt="reaction-happy"
                  />
                </div>
              </div>

              <p className="meta-line-text">4</p>
            </div>
          ) : null}

          <div
            className="meta-line"
            onMouseEnter={(event) => {
              setShowReaction(event.currentTarget);
            }}
            onMouseLeave={() => {
              setShowReaction(null);
            }}
          >
            {checkReact ? (
              <p
                className="meta-line-link light reaction-options-small-dropdown-trigger"
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => reactComment()}
              >
                <img
                  className="post-option-icon icon-thumbs-up mr-10"
                  src={"/img/reaction/love.png"}
                  alt="reaction-love"
                />{" "}
                Love
              </p>
            ) : (
              <p
                className="meta-line-link light reaction-options-small-dropdown-trigger"
                onClick={() => reactComment()}
              >
                React!
              </p>
            )}
            <Popper
              id={id}
              open={open}
              anchorEl={showReaction}
              placement="top"
              style={{ zIndex: 100002 }}
            >
              <ReactionSmall />
            </Popper>
          </div>

          <div className="meta-line" onClick={() => setShowCommentChild(true)}>
            <p className="meta-line-link light">Reply</p>
          </div>

          <div className="meta-line">
            <p className="meta-line-timestamp">
              {moment(itemReply.createdAt).fromNow()}
            </p>
          </div>

          <div className="meta-line settings">
            <div
              className="post-settings-wrap"
              onClick={(e) =>
                setSetupComment(setupComment ? false : e.currentTarget)
              }
            >
              <div className="post-settings post-settings-dropdown-trigger">
                <svg className="post-settings-icon icon-more-dots">
                  <use xlinkHref="#svg-more-dots" />
                </svg>
              </div>
              <Popper
                id={id1}
                open={open1}
                anchorEl={setupComment}
                placement="top"
                style={{ zIndex: 100002 }}
              >
                <div className="simple-dropdown post-settings-dropdown">
                  <p
                    className="simple-dropdown-link"
                    onClick={() => deleteComment()}
                  >
                    Xóa
                  </p>
                </div>
              </Popper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Popper from "@mui/material/Popper";
import ReactionSmall from "../../reaction/reactionSmall.component";
import { reactCommentAction } from "../../../store/actions/react.actions";
import {
  deleteCommentAction,
  getListCommentAction,
} from "../../../store/actions/comment.actions";
import ItemCommentReply from "./itemCommentReply";
import ReplyComment from "../replyComment/replyComment.itemNews";
import { addNotifyAction } from "../../../store/actions/notify.actions";
import { NavLink } from "react-router-dom";

export default function ItemCommentItemNewsfeed(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const { itemComment, itemPost, setListComment, listComment } = props;
  const [showReaction, setShowReaction] = useState(false);
  const [setupComment, setSetupComment] = useState(false);
  const [showCommentChild, setShowCommentChild] = useState();
  const [checkReact, setCheckReact] = useState(
    itemComment.react.filter((id) => id === detailUser._id)?.[0],
  );

  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const open1 = Boolean(setupComment);
  const id1 = open1 ? "simple-popper" : undefined;
  const reactComment = async () => {
    await dispatch(reactCommentAction(itemComment._id));
    await setCheckReact(!checkReact);
    if (!checkReact && detailUser._id !== itemComment.user._id) {
      await dispatch(
        addNotifyAction({
          receiver: [itemComment.user._id],
          text: `Đã thả cảm xúc bình luận của bạn: ${
            itemComment?.content.length > 15
              ? `${itemComment?.content.slice(0, 20)}...`
              : itemComment?.content
          }`,
          content: "love",
          image: detailUser?.avatar?.link,
        }),
      );
      socket.emit("likecomment", {
        comment: itemComment,
        user: detailUser,
        status: checkReact ? 0 : 1,
      });
    }
  };

  const deleteComment = async () => {
    if (itemComment.user._id === detailUser._id) {
      await dispatch(deleteCommentAction(itemComment._id));
      for (let i = 0; i < listComment.length; i++) {
        if (listComment[i].parent_comment === itemComment._id) {
          await dispatch(deleteCommentAction(listComment[i]._id));
        }
      }
      const res = await dispatch(getListCommentAction(itemPost._id));
      await setListComment(res?.comment);
    } else {
      Swal.fire(
        "Xóa bình luận thất bại!",
        "Bạn không có quyền đối với tính năng này",
        "error",
      );
    }
  };

  const showItemCommentReply = (listComment) => {
    let result = null;
    if (listComment?.length > 0) {
      result = listComment.map((itemReply, index) => {
        if (itemReply.parent_comment === itemComment._id) {
          return (
            <ItemCommentReply
              key={index}
              itemReply={itemReply}
              setShowCommentChild={setShowCommentChild}
              setListComment={setListComment}
              itemPost={itemPost}
            />
          );
        }
      });
    }
    return result;
  };

  return (
    <div className="post-comment unread">
      {/* reply-2 */}
      <a className="user-avatar small no-outline" href="profile-timeline.html">
        <div className="user-avatar-content">
          <img
            src={
              itemComment?.user?.avatar?.link ||
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
          to={`/profile/${itemComment?.user?._id}`}
        >
          {itemComment.user.name}
        </NavLink>
        {itemComment.content}
      </p>
      <div className="content-actions">
        <div className="content-action">
          {itemComment?.react?.length < 0 ? (
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

          <div
            className="meta-line"
            onClick={() => setShowCommentChild(itemComment._id)}
          >
            <p className="meta-line-link light">Reply</p>
          </div>

          <div className="meta-line">
            <p className="meta-line-timestamp">
              {moment(itemComment.createdAt).fromNow()}
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
      {showItemCommentReply(listComment)}
      {showCommentChild ? (
        <ReplyComment
          itemPost={itemPost}
          listComment={listComment}
          itemComment={itemComment}
          setListComment={setListComment}
        />
      ) : null}
    </div>
  );
}

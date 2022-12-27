import React, { useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import PictureItemNews from "./content/picture.itemNews";
import ShareNewsItemNews from "./content/shareNews.itemNews";
import VideoItemNews from "./content/video.itemNews";
import ListCommentItemNewsfeed from "../../listComment/listComment.itemNews";
import ReactionBig from "../../reaction/reactionBig.component";
import SetupItemNewsfeed from "./setup/setup.itemNews";
import Popper from "@mui/material/Popper";
import ListReactionNews from "../../listReactionNews/listReactionNews.component";
import { reactPostAction } from "../../../store/actions/react.actions";
import { addNotifyAction } from "../../../store/actions/notify.actions";
import { NavLink } from "react-router-dom";
import { getListPostAction } from "../../../store/actions/post.actions";

export default function ItemNewsfeed(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  // state
  const { itemPost } = props;
  const [showReaction, setShowReaction] = useState(false);
  const [showListComment, setShowListComment] = useState(false);
  const [quantityComment, setQuantityComment] = useState(0);
  const [checkReact, setCheckReact] = useState(
    itemPost.react.filter((id) => id === detailUser._id)?.[0],
  );

  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const reactPost = async () => {
    await dispatch(reactPostAction(itemPost._id));
    await setCheckReact(!checkReact);
    await dispatch(getListPostAction());
    if (!checkReact && detailUser._id !== itemPost.user._id) {
      await dispatch(
        addNotifyAction({
          receiver: [itemPost.user._id],
          text: `Đã thả cảm xúc bài viết của bạn: ${
            itemPost?.content.length > 15
              ? `${itemPost?.content.slice(0, 20)}...`
              : itemPost?.content
          }`,
          content: "love",
          image: detailUser?.avatar?.link,
        }),
      );
      socket.emit("likepost", {
        post: itemPost,
        user: detailUser,
        status: checkReact ? 0 : 1,
      });
    }
  };
  return (
    <div className="widget-box no-padding">
      <SetupItemNewsfeed itemPost={itemPost} />

      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <img
                    src={
                      itemPost?.user?.avatar?.link ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                    }
                    className="image-avatar-40"
                    alt="error"
                  />
                </div>
              </div>
            </a>

            <p className="user-status-title medium">
              <NavLink className="bold" to={`/profile/${itemPost?.user?._id}`}>
                {itemPost?.user?.name}
              </NavLink>
            </p>

            <p className="user-status-text small">
              {moment(itemPost?.createdAt).fromNow()}
            </p>
          </div>

          <p className="widget-box-status-text">{itemPost?.content}</p>
          {/* <ShareNewsItemNews /> */}
          {itemPost?.attachment?.length > 0 ? (
            <PictureItemNews listImg={itemPost?.attachment} />
          ) : null}
        </div>

        {/* <VideoItemNews /> */}

        <div className="widget-box-status-content">
          <div className="content-actions">
            <ListReactionNews itemPost={itemPost} />

            <div className="content-action">
              <div className="meta-line">
                <p className="meta-line-link">{quantityComment} Comments</p>
              </div>

              {/* <div className="meta-line">
                <p className="meta-line-text">0 Shares</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="post-options">
        <div
          className="post-option-wrap"
          onMouseEnter={(event) => {
            setShowReaction(event.currentTarget);
          }}
          onMouseLeave={() => {
            setShowReaction(null);
          }}
        >
          {!checkReact ? (
            <div
              className="post-option reaction-options-dropdown-trigger"
              onClick={() => reactPost()}
            >
              <svg className="post-option-icon icon-thumbs-up">
                <use xlinkHref="#svg-thumbs-up" />
              </svg>
              <p className="post-option-text">React!</p>
            </div>
          ) : (
            <div
              className="post-option reaction-options-dropdown-trigger active"
              onClick={() => reactPost()}
            >
              <img
                className="post-option-icon icon-thumbs-up"
                src={"/img/reaction/love.png"}
                alt="reaction-love"
              />
              <p className="post-option-text">Love</p>
            </div>
          )}

          <Popper
            id={id}
            open={open}
            anchorEl={showReaction}
            placement="top-start"
          >
            <ReactionBig />
          </Popper>
        </div>

        <div
          className="post-option"
          onClick={() => setShowListComment(!showListComment)}
        >
          <svg className="post-option-icon icon-comment">
            <use xlinkHref="#svg-comment" />
          </svg>

          <p className="post-option-text">Comment</p>
        </div>

        {/* <div className="post-option">
          <svg className="post-option-icon icon-share">
            <use xlinkHref="#svg-share" />
          </svg>

          <p className="post-option-text">Share</p>
        </div> */}
      </div>
      <ListCommentItemNewsfeed
        itemPost={itemPost}
        showComment={showListComment}
        setQuantityComment={setQuantityComment}
      />
    </div>
  );
}

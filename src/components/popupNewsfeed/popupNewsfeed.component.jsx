import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popper from "@mui/material/Popper";
import { offPopupNewsfeedAtion } from "../../store/actions/popupNewsfeed.actions";
import ListCommentItemNewsfeed from "../listComment/listComment.itemNews";
import ReactionBig from "../reaction/reactionBig.component";
import ListReactionNews from "../listReactionNews/listReactionNews.component";

export default function PopupNewsfeed() {
  const dispatch = useDispatch();
  const [showReaction, setShowReaction] = useState(false);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  const closePopup = () => {
    dispatch(offPopupNewsfeedAtion());
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(21, 21, 31, 0.85)",
          width: "100vw",
          height: "100vh",
          zIndex: 100000,
          opacity: 1,
          transition:
            "opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s",
        }}
      ></div>
      <div className="popup-picture on-comment-image">
        <div
          className="popup-close-button popup-picture-trigger"
          onClick={() => closePopup()}
        >
          <svg className="popup-close-button-icon icon-cross">
            <use xlinkHref="#svg-cross" />
          </svg>
        </div>

        <div
          className="widget-box no-padding"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="widget-box-scrollable"
            data-simplebar
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="widget-box-status">
              <div className="widget-box-status-content">
                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src={
                            process.env.PUBLIC_URL + "/img/avatar/01.jpg"
                          }
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title medium">
                    <a className="bold" href="profile-timeline.html">
                      Marina Valentine
                    </a>
                  </p>

                  <p className="user-status-text small">29 minutes ago</p>
                </div>

                <p className="widget-box-status-text">
                  Here's a sneak peek of the official box cover art for{" "}
                  <a href="#">Machine Wasteland II</a>! Remember that I'll be
                  having a stream showing a preview tommorrow at 9PM PCT!
                </p>

                <div className="content-actions">
                  <ListReactionNews size={true} />

                  <div className="content-action">
                    <div className="meta-line">
                      <p className="meta-line-link">13 Comments</p>
                    </div>

                    <div className="meta-line">
                      <p className="meta-line-text">0 Shares</p>
                    </div>
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
                <div className="post-option no-text reaction-options-dropdown-trigger">
                  <svg className="post-option-icon icon-thumbs-up">
                    <use xlinkHref="#svg-thumbs-up" />
                  </svg>
                </div>
                <Popper
                  id={id}
                  open={open}
                  anchorEl={showReaction}
                  placement="top-start"
                  style={{ zIndex: 100002 }}
                >
                  <ReactionBig />
                </Popper>
              </div>

              <div className="post-option no-text active">
                <svg className="post-option-icon icon-comment">
                  <use xlinkHref="#svg-comment" />
                </svg>
              </div>

              <div className="post-option no-text">
                <svg className="post-option-icon icon-share">
                  <use xlinkHref="#svg-share" />
                </svg>
              </div>
            </div>
            <ListCommentItemNewsfeed />
          </div>
        </div>

        <div className="popup-picture-image-wrap">
          <figure className="popup-picture-image">
            <img
              src={process.env.PUBLIC_URL + "/img/cover/04.jpg"}
              alt="cover-04"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPostAction,
  getListCommentAction,
} from "../../../store/actions/comment.actions";
import { addNotifyAction } from "../../../store/actions/notify.actions";

export default function ReplyComment(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  const { itemComment, itemPost, setListComment } = props;
  const [focusInput, setFocusInput] = useState();
  const [commentContent, setCommentContent] = useState();

  const commentPost = async () => {
    let result = new FormData();
    await result.append("content", commentContent);
    if (itemComment) {
      await result.append("parent_comment", itemComment._id);
    }
    const res1 = await dispatch(commentPostAction(itemPost._id, result));
    const res = await dispatch(getListCommentAction(itemPost._id));
    await setListComment(res?.comment);
    await setCommentContent("");
    if (detailUser._id !== itemPost.user._id) {
      await dispatch(
        addNotifyAction({
          receiver: [itemPost.user._id],
          text: `Đã ${
            itemComment ? "trả lời bình luận" : "bình luận bài viết"
          } của bạn: ${
            itemComment
              ? commentContent
              : itemPost?.content.length > 15
              ? `${itemPost?.content.slice(0, 20)}...`
              : itemPost?.content
          }`,
          content: "",
          image: detailUser?.avatar?.link,
        }),
      );
      if (itemComment) {
        socket.emit("replycomment", {
          comment: itemComment,
          user: detailUser,
          status: 1,
        });
      } else {
        socket.emit("comment", {
          post: itemPost,
          comment: res1,
          user: detailUser,
          status: 1,
        });
      }
    }
  };

  return (
    <div className="post-comment-form">
      <div className="user-avatar small no-outline">
        <div className="user-avatar-content">
          <img
            src={
              detailUser.avatar.link ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
            }
            className="image-avatar-40"
            alt="error"
          />
        </div>
      </div>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          commentPost();
        }}
      >
        <div className="form-row">
          <div className="form-item">
            <div
              className={
                focusInput === "reply"
                  ? "form-input small active"
                  : "form-input small"
              }
            >
              <label>Your Reply</label>
              <input
                type="text"
                id="post-reply"
                name="post_reply"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                onFocus={() => setFocusInput("reply")}
                onBlur={() => setFocusInput()}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

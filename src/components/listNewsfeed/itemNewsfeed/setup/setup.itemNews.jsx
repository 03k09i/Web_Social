import React, { useState } from "react";
import Swal from "sweetalert2";
import Popper from "@mui/material/Popper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNewsfeedAction,
  getListPostAction,
} from "../../../../store/actions/post.actions";

export default function SetupItemNewsfeed(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { itemPost } = props;
  const [setupPost, setSetupPost] = useState(false);
  const open1 = Boolean(setupPost);
  const id1 = open1 ? "simple-popper" : undefined;

  const deletePost = async () => {
    if (itemPost.user._id === detailUser._id) {
      await dispatch(deleteNewsfeedAction(itemPost._id));
      await dispatch(getListPostAction());
    } else {
      Swal.fire(
        "Xóa bài viết thất bại!",
        "Bạn không có quyền đối với tính năng này",
        "error",
      );
    }
  };
  return (
    <div className="widget-box-settings">
      <div
        className="post-settings-wrap"
        onClick={(e) => setSetupPost(setupPost ? false : e.currentTarget)}
      >
        <div className="post-settings widget-box-post-settings-dropdown-trigger">
          <svg className="post-settings-icon icon-more-dots">
            <use xlinkHref="#svg-more-dots" />
          </svg>
        </div>
        <Popper
          id={id1}
          open={open1}
          anchorEl={setupPost}
          placement="top"
          style={{ zIndex: 100002 }}
        >
          <div className="simple-dropdown post-settings-dropdown">
            <p className="simple-dropdown-link" onClick={() => deletePost()}>
              Xóa
            </p>
          </div>
        </Popper>
      </div>
    </div>
  );
}

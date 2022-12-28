import React, { useState } from "react";
import Swal from "sweetalert2";
import Popper from "@mui/material/Popper";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNewsfeedAction,
  getListPostAction,
  publicNewsfeedAction,
} from "../../../../store/actions/post.actions";
import { Modal, Box } from "@mui/material";
import PostNewsfeed from "../../../../pages/newsfeed/postNewsfeed/postNewsfeed.newsfeed";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 480,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  zIndex: 1,
  overflowY: "auto",
};
export default function SetupItemNewsfeed(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { itemPost } = props;
  const [open, setOpen] = useState(false);
  const [setupPost, setSetupPost] = useState(false);
  const open1 = Boolean(setupPost);
  const id1 = open1 ? "simple-popper" : undefined;

  console.log(itemPost);
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
  const setStatusPost = async (status) => {
    if (itemPost.user._id === detailUser._id) {
      await dispatch(publicNewsfeedAction(itemPost._id, { ispublic: status }));
      await dispatch(getListPostAction());
    } else {
      Swal.fire(
        "Cập nhật thất bại!",
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
            <p className="simple-dropdown-link" onClick={() => setOpen(true)}>
              Sửa
            </p>
            <p
              className="simple-dropdown-link"
              onClick={() => setStatusPost(!itemPost.ispublic)}
            >
              {itemPost.ispublic ? "Chỉ mình tôi" : "Công khai"}
            </p>
            <p className="simple-dropdown-link" onClick={() => deletePost()}>
              Xóa
            </p>
          </div>
        </Popper>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sty
      >
        <Box sx={style}>
          <PostNewsfeed itemPost={itemPost} />
        </Box>
      </Modal>
    </div>
  );
}

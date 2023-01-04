import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import {
  postNewsfeedAction,
  getListPostAction,
  updateNewsfeedAction,
} from "../../../store/actions/post.actions";

export default function PostNewsfeed(props) {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);

  const { itemPost, setOpen } = props;
  const [contentPost, setContentPost] = useState(itemPost?.content || "");
  const [formUploadFile, setFormUploadFile] = useState(
    itemPost?.attachment ? true : false,
  );
  const [filePost, setFilePost] = useState(itemPost?.attachment || []);
  let [file_delete, setFile_delete] = useState([]);

  const deleteImage = async (itemFile, index) => {
    const temp = filePost.filter((item, id) => id !== index);
    await setFilePost(temp);
    let del = Array.from(file_delete);
    await del.push(itemFile);
    await setFile_delete(del);
  };
  const getfile = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*, image/*";
    input.multiple = "multiple";
    input.onchange = (e) => {
      let element = [];
      for (let i = 0; i < e.target.files.length; i++) {
        element.push(e.target.files[i]);
      }
      setFilePost([].concat(filePost, element));
    };
    input.click();
  };
  const postNews = () => {
    Swal.fire({
      title: "Wait a minute",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        let result = new FormData();
        await result.append("content", contentPost);
        await result.append("ispublic", true);
        if (itemPost) {
          await result.append("file_delete", file_delete);
          for (let i = 0; i < filePost.length; i++) {
            if (!filePost[i].link) {
              await result.append("files", filePost[i]);
            }
          }
          await dispatch(updateNewsfeedAction(itemPost._id, result));
        } else {
          for (let i = 0; i < filePost.length; i++) {
            await result.append("files", filePost[i]);
          }
          await dispatch(postNewsfeedAction(result));
        }
        setTimeout(() => {
          dispatch(getListPostAction());
        }, 3000);
        setContentPost("");
        setFilePost([]);
      },
    });
    setOpen(false);
  };

  const showListImg = (filePost) => {
    let result = null;
    if (filePost?.length > 0) {
      result = filePost.map((itemFile, index) => {
        return (
          <div
            key={index}
            className={
              filePost.length > 4
                ? "show-list-image-post-5 show-icon-delete"
                : `show-list-image-post-${filePost.length} show-icon-delete`
            }
          >
            <img
              src={itemFile?.link || URL.createObjectURL(itemFile)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
              }}
              alt="#"
            ></img>
            <div
              className="icon-delete-image-post"
              onClick={() => deleteImage(itemFile._id, index)}
            >
              <TiDelete style={{ width: 30, height: 30 }} />
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="quick-post">
      {/* <div className="quick-post-header">
        <div className="option-items">
          <div className="option-item active">
            <svg className="option-item-icon icon-status">
              <use xlinkHref="#svg-status" />
            </svg>

            <p className="option-item-title">Status</p>
          </div>

          <div className="option-item">
            <svg className="option-item-icon icon-blog-posts">
              <use xlinkHref="#svg-blog-posts" />
            </svg>

            <p className="option-item-title">Blog Post</p>
          </div>

          <div className="option-item">
            <svg className="option-item-icon icon-poll">
              <use xlinkHref="#svg-poll" />
            </svg>

            <p className="option-item-title">Poll</p>
          </div>
        </div>
      </div> */}

      <div className="quick-post-body">
        <form className="form">
          <div className="form-row">
            <div className="form-item">
              <div className="form-textarea">
                <textarea
                  id="quick-post-text"
                  name="quick-post-text"
                  placeholder={`Hi ${detailUser?.name}! Share your post here...`}
                  value={contentPost}
                  onChange={(e) => {
                    if (e.target.value.length <= 1000) {
                      setContentPost(e.target.value);
                    }
                  }}
                />

                <p className="form-textarea-limit-text">
                  {1000 - contentPost.length}/1000
                </p>
                {formUploadFile && (
                  <div
                    className={
                      filePost?.length > 0 ? "upload-image" : "upload-box"
                    }
                    onClick={filePost?.length > 0 ? null : getfile}
                    style={{ margin: 15 }}
                  >
                    {showListImg(filePost)}
                    {filePost?.length > 0 ? (
                      <svg
                        className="upload-box-icon icon-photos"
                        onClick={() => getfile()}
                      >
                        <use xlinkHref="#svg-photos" />
                      </svg>
                    ) : (
                      <>
                        <svg className="upload-box-icon icon-photos">
                          <use xlinkHref="#svg-photos" />
                        </svg>

                        <p className="upload-box-title">Thêm ảnh / video</p>

                        <p className="upload-box-text">hoặc kéo và thả</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="quick-post-footer">
        <div className="quick-post-footer-actions">
          {/* <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Photo"
          >
            <svg className="quick-post-footer-action-icon icon-camera">
              <use xlinkHref="#svg-camera" />
            </svg>
          </div> */}

          <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert GIF"
            onClick={() => setFormUploadFile(!formUploadFile)}
          >
            <svg
              className={
                formUploadFile
                  ? "quick-post-footer-action-icon icon-photos icon-post-news"
                  : "quick-post-footer-action-icon icon-photos"
              }
            >
              <use xlinkHref="#svg-photos" />
            </svg>
          </div>

          {/* <div
            className="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Tag"
          >
            <svg className="quick-post-footer-action-icon icon-friend">
              <use xlinkHref="#svg-friend" />
            </svg>
          </div> */}
        </div>

        <div className="quick-post-footer-actions">
          {/* <p className="button small void">Discard</p> */}

          <p className="button small secondary" onClick={() => postNews()}>
            {itemPost ? "Update" : "Post"}
          </p>
        </div>
      </div>
    </div>
  );
}

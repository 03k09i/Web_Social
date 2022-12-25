import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewsfeedAction } from "../../../store/actions/post.actions";

export default function PostNewsfeed() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);

  const [contentPost, setContentPost] = useState("");
  const [formUploadFile, setFormUploadFile] = useState(false);
  const [filePost, setFilePost] = useState([]);

  const postNews = () => {
    Swal.fire({
      title: "Wait a minute",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        try {
          let result = new FormData();
          await result.append("content", contentPost);
          for (let i = 0; i < filePost.length; i++) {
            await result.append("files", filePost[i]);
          }
          await dispatch(postNewsfeedAction(result));
          setContentPost("");
          setFilePost([]);
        } catch (error) {
          Swal.fire("ERROR", error, "error");
        }
      },
    });
  };

  const showListImg = (filePost) => {
    let result = [];
    if (filePost?.length > 0) {
      result = filePost.map((itemFile, index) => {
        return (
          <img
            key={index}
            src={URL.createObjectURL(itemFile)}
            className={
              filePost.length > 4
                ? "show-list-image-post-5"
                : `show-list-image-post-${filePost.length}`
            }
            alt="#"
          ></img>
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
                    style={{ margin: 15 }}
                    onClick={() => {
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
                    }}
                  >
                    {showListImg(filePost)}
                    {filePost?.length > 0 ? null : (
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
            Post
          </p>
        </div>
      </div>
    </div>
  );
}

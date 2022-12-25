import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../../store/actions/user.actions";

export default function UpdateAvatar() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState();
  const [fileAvatar, setFileAvatar] = useState();
  const [cover, setCover] = useState();
  const [fileCover, setFileCover] = useState();

  const updateImage = () => {
    Swal.fire({
      title: "Wait a minute",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        let result = new FormData();
        await result.append("avatar", fileAvatar);
        await dispatch(updateUserAction(result));
      },
    });
  };
  return (
    <div className="grid-column">
      <div className="user-preview small fixed-height">
        <figure className="user-preview-cover liquid">
          <img
            src={
              cover
                ? cover
                : "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/141092912_845612416014082_5957426372095750825_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jOufViczPjUAX_OfaO2&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfC5JnVuW3yKc5VZ7BcMhiXbjcABom6IlrPD-3OWWzSdnQ&oe=6380C094"
            }
            alt="cover-01"
          />
        </figure>

        <div className="user-preview-info">
          <div className="user-short-description small">
            <div className="user-short-description-avatar user-avatar">
              <img
                src={avatar || detailUser?.avatar?.link}
                className="image-avatar-100 avatar-border-white mt-10"
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="upload-box"
        onClick={() => {
          var input = document.createElement("input");
          input.type = "file";
          input.onchange = (e) => {
            const preview = URL.createObjectURL(e.target.files[0]);
            setFileAvatar(e.target.files[0]);
            setAvatar(preview);
          };
          input.click();
        }}
      >
        <svg className="upload-box-icon icon-members">
          <use xlinkHref="#svg-members" />
        </svg>

        <p className="upload-box-title">Change Avatar</p>

        <p className="upload-box-text">110x110px size minimum</p>
      </div>

      <div
        className="upload-box"
        onClick={() => {
          var input = document.createElement("input");
          input.type = "file";
          input.onchange = (e) => {
            const preview = URL.createObjectURL(e.target.files[0]);
            setFileCover(e.target.files[0]);
            setCover(preview);
          };
          input.click();
        }}
      >
        <svg className="upload-box-icon icon-photos">
          <use xlinkHref="#svg-photos" />
        </svg>

        <p className="upload-box-title">Change Cover</p>

        <p className="upload-box-text">1184x300px size minimum</p>
      </div>
      <button className="button medium primary" onClick={() => updateImage()}>
        Update
      </button>
    </div>
  );
}

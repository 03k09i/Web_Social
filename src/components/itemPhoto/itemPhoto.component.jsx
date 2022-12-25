import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onPopupNewsfeedAtion } from "../../store/actions/popupNewsfeed.actions";

export default function ItemPhoto(props) {
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch(onPopupNewsfeedAtion());
  };
  const { itemImg } = props;
  return (
    <div
      className="photo-preview small popup-picture-trigger"
      style={{ zIndex: 0 }}
      onClick={openPopup}
    >
      <figure className="photo-preview-image liquid">
        <img
          src={itemImg?.link || "/img/landing/mylove2.jpg"}
          alt="photo-preview-01"
        />
      </figure>

      <div className="photo-preview-info">
        <div className="reaction-count-list">
          <div className="reaction-count negative">
            <svg className="reaction-count-icon icon-thumbs-up">
              <use xlinkHref="#svg-thumbs-up" />
            </svg>

            <p className="reaction-count-text">2</p>
          </div>

          <div className="reaction-count negative">
            <svg className="reaction-count-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>

            <p className="reaction-count-text">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

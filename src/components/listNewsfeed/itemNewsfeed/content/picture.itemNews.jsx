import React from "react";
import ItemPhoto from "../../../itemPhoto/itemPhoto.component";

export default function PictureItemNews(props) {
  const { listImg } = props;
  return (
    <div className="picture-collage">
      <div className="picture-collage-row medium">
        {listImg?.[0] ? (
          <div className="picture-collage-item popup-picture-trigger">
            <ItemPhoto itemImg={listImg?.[0]} />
          </div>
        ) : null}
        {listImg?.[1] ? (
          <div className="picture-collage-item popup-picture-trigger">
            <ItemPhoto itemImg={listImg?.[1]} />
          </div>
        ) : null}
      </div>

      <div className="picture-collage-row">
        {listImg?.[2] ? (
          <div className="picture-collage-item popup-picture-trigger">
            <ItemPhoto itemImg={listImg?.[2]} />
          </div>
        ) : null}
        {listImg?.[3] ? (
          <div className="picture-collage-item popup-picture-trigger">
            <ItemPhoto itemImg={listImg?.[3]} />
          </div>
        ) : null}

        {listImg?.[4] ? (
          <div className="picture-collage-item">
            <a
              className="picture-collage-item-overlay"
              href="profile-photos.html"
            >
              <p className="picture-collage-item-overlay-text">+22</p>
            </a>
            <ItemPhoto itemImg={listImg?.[4]} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

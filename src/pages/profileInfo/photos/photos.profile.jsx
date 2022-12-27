import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemPhoto from "../../../components/itemPhoto/itemPhoto.component";
import { getImageUserAction } from "../../../store/actions/user.actions";

export default function PhotosProfile() {
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);

  const [listImage, setListImage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getImageUserAction(detailUser._id));
      await setListImage(res.list_Image);
    };
    fetchData();
  }, []);

  const showImage = (listImage) => {
    let result = null;
    if (listImage?.length > 0) {
      result = listImage.map((itemImage, index) => {
        return <ItemPhoto key={index} itemImg={itemImage} />;
      });
    }
    return result;
  };
  return (
    <section className="section" style={{ marginBottom: 100 }}>
      <div className="section-header">
        <div className="section-header-info">
          <h2 className="section-title">
            Timeline Photos{" "}
            {listImage?.length > 0 ? (
              <span className="highlighted">{listImage?.length}</span>
            ) : null}
          </h2>
        </div>

        {/* <div className="section-header-actions">
          <p className="section-header-action">Add Photos +</p>
        </div> */}
      </div>

      <div className="grid grid-2-2-2-2-2-2 centered">
        {showImage(listImage)}
      </div>
    </section>
  );
}

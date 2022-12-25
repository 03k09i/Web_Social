import React from "react";
import { Fab } from "@mui/material";

export default function UpLoadImage(props) {
  const { setImage, setFile } = props;

  const onChangeAvatar = (e) => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setImage(preview);
    setFile(e.target.files[0]);
  };

  return (
    <label
      style={{
        position: "absolute",
        width: 36,
        height: 36,
        borderRadius: "50%",
        bottom: 0,
        right: 0,
      }}
    >
      <input
        style={{ display: "none" }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        accept="image/*"
        onChange={onChangeAvatar}
      />
      <Fab size="small" component="span" aria-label="add" variant="extended">
        <div
          style={{
            background: `url(${
              process.env.PUBLIC_URL + "/img/landing/camera.png"
            }) center center / contain no-repeat`,
            color: "white",
            zIndex: 1,
            width: 20,
            height: 20,
            padding: 8,
          }}
        ></div>
      </Fab>
    </label>
  );
}

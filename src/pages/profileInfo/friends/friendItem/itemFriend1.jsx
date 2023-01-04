import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemFriend1(props) {
  const { itemUser } = props;
  return (
    <div className="grid-column">
      <div className="item-friend">
        <div className=" img-friend">
          <img
            src={
                itemUser?.avatar?.link || "https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"
            }
          />
        </div>
        <div className=" info-friend">
          <div className="content-info-friend">
            <p>{itemUser.name}</p>
          </div>
        </div>
        <div className=" status-friend">
        </div>
      </div>
    </div>
  );
}

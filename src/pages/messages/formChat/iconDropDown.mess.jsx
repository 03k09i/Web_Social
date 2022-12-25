import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";

export default function IconDropDownMess(props) {
  const dropDown = () => {
    props.dropDown();
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <HiOutlineArrowDown className="icon-scroll-to-end" onClick={dropDown} />
    </div>
  );
}

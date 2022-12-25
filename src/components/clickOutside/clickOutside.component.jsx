import React, { useEffect } from "react";

export default function ClickOutside(props) {
  const { checkOutside, setCloseModal } = props;
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
  const handleClick = (event) => {
    const { target } = event;
    if (!checkOutside.current.contains(target)) {
      setCloseModal(false);
    }
  };
  return;
}

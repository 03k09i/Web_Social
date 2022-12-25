import React, { useState } from "react";
import Popper from "@mui/material/Popper";

export default function ReactionTotal() {
  const [showReaction, setShowReaction] = useState(false);
  const open = Boolean(showReaction);
  const id = open ? "simple-popper" : undefined;
  return (
    <div
      className="reaction-item"
      onMouseEnter={(event) => {
        setShowReaction(event.currentTarget);
      }}
      onMouseLeave={() => {
        setShowReaction(null);
      }}
    >
      <img
        className="reaction-image reaction-item-dropdown-trigger"
        src={process.env.PUBLIC_URL + "/img/reaction/love.png"}
        alt="reaction-love"
      />
      <Popper
        id={id}
        open={open}
        anchorEl={showReaction}
        placement="top-start"
        style={{ zIndex: 100002 }}
      >
        <div
          className="simple-dropdown padded reaction-item-dropdown "
          style={{ zIndex: 3 }}
        >
          <p className="simple-dropdown-text">
            <img
              className="reaction"
              src={process.env.PUBLIC_URL + "/img/reaction/love.png"}
              alt="reaction-love"
            />{" "}
            <span className="bold">Love</span>
          </p>

          <p className="simple-dropdown-text">Destroy Dex</p>

          <p className="simple-dropdown-text">The Green Goo</p>

          <p className="simple-dropdown-text">Bearded Wonder</p>

          <p className="simple-dropdown-text">Sandra Strange</p>

          <p className="simple-dropdown-text">Matt Parker</p>

          <p className="simple-dropdown-text">James Murdock</p>

          <p className="simple-dropdown-text">
            <span className="bold">and 14 more...</span>
          </p>
        </div>
      </Popper>
    </div>
  );
}

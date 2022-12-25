import React from "react";
import ReactionTotal from "../reaction/reactionTotal.component";

export default function ListReactionNews() {
  return (
    <div className="content-action">
      <div className="meta-line">
        <div className="meta-line-list reaction-item-list small">
          <ReactionTotal />
          <ReactionTotal />
          <ReactionTotal />
        </div>
        <p className="meta-line-text">16</p>
      </div>
    </div>
  );
}

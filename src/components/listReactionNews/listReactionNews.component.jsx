import React from "react";
import ReactionTotal from "../reaction/reactionTotal.component";

export default function ListReactionNews(props) {
  const { itemPost } = props;
  return (
    <div className="content-action">
      <div className="meta-line">
        <div className="meta-line-list reaction-item-list small">
          <ReactionTotal />
        </div>
        <p className="meta-line-text">{itemPost?.react?.length}</p>
      </div>
    </div>
  );
}

import React from "react";

export default function ReactionBig() {
  return (
    <div className="reaction-options reaction-options-dropdown animation-reaction-big">
      <div className="reaction-option text-tooltip-tft" data-title="Like">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/like.png"}
          alt="reaction-like"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Love">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/love.png"}
          alt="reaction-love"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Dislike">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/dislike.png"}
          alt="reaction-dislike"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Happy">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/happy.png"}
          alt="reaction-happy"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Funny">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/funny.png"}
          alt="reaction-funny"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Wow">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/wow.png"}
          alt="reaction-wow"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Angry">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/angry.png"}
          alt="reaction-angry"
        />
      </div>

      <div className="reaction-option text-tooltip-tft" data-title="Sad">
        <img
          className="reaction-option-image"
          src={process.env.PUBLIC_URL + "/img/reaction/sad.png"}
          alt="reaction-sad"
        />
      </div>
    </div>
  );
}

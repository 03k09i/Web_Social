import React from "react";

export default function ShareNewsItemNews() {
  return (
    <div className="widget-box no-padding">
      <div className="widget-box-status">
        <div className="widget-box-status-content">
          <div className="user-status">
            <a className="user-status-avatar" href="profile-timeline.html">
              <div className="user-avatar small no-outline">
                <div className="user-avatar-content">
                  <div
                    className="hexagon-image-30-32"
                    data-src="img/avatar/02.jpg"
                  />
                </div>

                <div className="user-avatar-badge">
                  <p className="user-avatar-badge-text">19</p>
                </div>
              </div>
            </a>

            <p className="user-status-title medium">
              <a className="bold" href="profile-timeline.html">
                Destroy Dex
              </a>
            </p>

            <p className="user-status-text small">6 hours ago</p>
          </div>

          <p className="widget-box-status-text">
            Attention everyone! From now on and through all the holydays season
            I'll be giving free season passes for a bunch of different games. Be
            on the lookout for these special streams to participate and win
            awesome prizes!
          </p>

          <a
            className="video-status"
            href="https://www.twitch.tv/"
            target="_blank"
          >
            <img
              className="video-status-image"
              src="img/cover/51.jpg"
              alt="cover-51"
            />

            <div className="video-status-info">
              <p className="video-status-meta">twitch.tv</p>

              <p className="video-status-title">
                <span className="bold">Destroy Dex</span> on{" "}
                <span className="highlighted">Twitch</span>
              </p>

              <p className="video-status-text">
                Tune in every Sunday for awesome givaways!
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

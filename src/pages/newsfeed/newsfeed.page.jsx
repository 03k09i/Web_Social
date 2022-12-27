import React from "react";
import ListNewsfeed from "../../components/listNewsfeed/listNewsfeed.component";
import PostNewsfeed from "./postNewsfeed/postNewsfeed.newsfeed";

export default function NewsfeedPage() {
  return (
    <div className="content-grid">
      <div
        className="grid grid-3-6-3 mobile-prefer-content"
        style={{ marginTop: 0 }}
      >
        <div className="grid-column">
          {/* <div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Members</p>

            <div className="widget-box-content">
              <div className="filters">
                <p className="filter">Newest</p>

                <p className="filter active">Popular</p>

                <p className="filter">Active</p>
              </div>

              <div className="user-status-list">
                <div className="user-status request-small">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/07.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Sarah Diamond
                    </a>
                  </p>

                  <p className="user-status-text small">24.5K profile views</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-add-friend">
                        <use xlinkHref="#svg-add-friend" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="grid-column">
          <PostNewsfeed />
          <ListNewsfeed />
        </div>
        <div className="grid-column">
          <div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Lien he</p>

            <div className="widget-box-content">
              <div className="user-status-list">
                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/05.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Neko Bebop
                    </a>{" "}
                    commented on Destroy Dex's{" "}
                    <a className="highlighted" href="profile-timeline.html">
                      photo
                    </a>
                  </p>

                  <p className="user-status-timestamp">3 minutes ago</p>
                </div>

                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/03.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Nick Grissom
                    </a>{" "}
                    liked Marina Valentine's{" "}
                    <a className="highlighted" href="profile-timeline.html">
                      status update
                    </a>
                  </p>

                  <p className="user-status-timestamp">12 minutes ago</p>
                </div>

                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/10.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      The Green Goo
                    </a>{" "}
                    liked Nick Grissom's{" "}
                    <a className="highlighted" href="profile-timeline.html">
                      video
                    </a>
                  </p>

                  <p className="user-status-timestamp">17 minutes ago</p>
                </div>

                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/03.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Nick Grissom
                    </a>{" "}
                    changed his{" "}
                    <a className="highlighted" href="profile-timeline.html">
                      profile picture
                    </a>
                  </p>

                  <p className="user-status-timestamp">33 minutes ago</p>
                </div>

                <div className="user-status">
                  <a
                    className="user-status-avatar"
                    href="profile-timeline.html"
                  >
                    <div className="user-avatar small no-outline">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/02.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="profile-timeline.html">
                      Destroy Dex
                    </a>{" "}
                    commented on Rosie Sakura's{" "}
                    <a className="highlighted" href="profile-timeline.html">
                      profile
                    </a>
                  </p>

                  <p className="user-status-timestamp">41 minutes ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">
                <div className="post-settings widget-box-post-settings-dropdown-trigger">
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="widget-box-title">Groups</p>

            <div className="widget-box-content">
              <div className="filters">
                <p className="filter">Newest</p>

                <p className="filter active">Popular</p>

                <p className="filter">Active</p>
              </div>

              <div className="user-status-list">
                <div className="user-status request-small">
                  <a className="user-status-avatar" href="group-timeline.html">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/29.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Twitch Streamers
                    </a>
                  </p>

                  <p className="user-status-text small">265 members</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a className="user-status-avatar" href="group-timeline.html">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/24.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Cosplayers of the World
                    </a>
                  </p>

                  <p className="user-status-text small">139 members</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a className="user-status-avatar" href="group-timeline.html">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/25.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Stream Designers
                    </a>
                  </p>

                  <p className="user-status-text small">466 members</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a className="user-status-avatar" href="group-timeline.html">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/28.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Street Artists
                    </a>
                  </p>

                  <p className="user-status-text small">951 members</p>

                  <div className="action-request-list">
                    <div className="action-request decline">
                      <svg className="action-request-icon icon-leave-group">
                        <use xlinkHref="#svg-leave-group" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="user-status request-small">
                  <a className="user-status-avatar" href="group-timeline.html">
                    <div className="user-avatar small no-border">
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/27.jpg"
                        />
                      </div>
                    </div>
                  </a>

                  <p className="user-status-title">
                    <a className="bold" href="group-timeline.html">
                      Gaming Watchtower
                    </a>
                  </p>

                  <p className="user-status-text small">2.365 members</p>

                  <div className="action-request-list">
                    <div className="action-request accept">
                      <svg className="action-request-icon icon-join-group">
                        <use xlinkHref="#svg-join-group" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

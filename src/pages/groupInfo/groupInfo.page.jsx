import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ListNewsfeed from "../../components/listNewsfeed/listNewsfeed.component";
import PhotosGroup from "./photos/photos.group";
import SectionNavGroup from "./sectionNav.group";

export default function GroupInfoPage() {
  return (
    <div className="content-grid">
      <div className="profile-header v2">
        <figure className="profile-header-cover liquid">
          <img
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/141092912_845612416014082_5957426372095750825_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jOufViczPjUAX_OfaO2&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfC5JnVuW3yKc5VZ7BcMhiXbjcABom6IlrPD-3OWWzSdnQ&oe=6380C094"
            alt="cover-01"
          />
        </figure>

        <div className="profile-header-info">
          <div className="user-short-description big">
            <a
              className="user-short-description-avatar user-avatar big no-stats"
              href="group-timeline.html"
            >
              <img
                src={"/img/landing/mylove2.jpg"}
                className="image-avatar-148 avatar-border-white"
                alt="error"
              />
            </a>
            <a
              className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium no-stats"
              href="group-timeline.html"
            >
              <div className="user-avatar-border">
                <div className="hexagon-120-130" />
              </div>

              <div className="user-avatar-content">
                <div
                  className="hexagon-image-100-110"
                  data-src="img/avatar/24.jpg"
                />
              </div>
            </a>

            <p className="user-short-description-title">
              <a href="group-timeline.html">Cosplayers of the World</a>
            </p>

            <p className="user-short-description-text">
              All cosplayers welcome!
            </p>
          </div>

          <div className="user-stats">
            <div className="user-stat big">
              <div className="user-stat-icon">
                <svg className="icon-public">
                  <use xlinkHref="#svg-public" />
                </svg>
              </div>

              <p className="user-stat-text">public</p>
            </div>

            <div className="user-stat big">
              <p className="user-stat-title">139</p>

              <p className="user-stat-text">members</p>
            </div>

            <div className="user-stat big">
              <p className="user-stat-title">105</p>

              <p className="user-stat-text">posts</p>
            </div>

            <div className="user-stat big">
              <p className="user-stat-title">7.3k</p>

              <p className="user-stat-text">visits</p>
            </div>
          </div>

          <div className="tag-sticker">
            <svg className="tag-sticker-icon icon-public">
              <use xlinkHref="#svg-public" />
            </svg>
          </div>

          <div className="profile-header-info-actions">
            <p className="profile-header-info-action button secondary">
              <svg className="icon-join-group">
                <use xlinkHref="#svg-join-group" />
              </svg>
            </p>

            <a
              className="profile-header-info-action button"
              href="hub-group-management.html"
            >
              <svg className="icon-more-dots">
                <use xlinkHref="#svg-more-dots" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <SectionNavGroup />
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="grid grid-3-6-3 mobile-prefer-content"
              style={{ marginTop: 20 }}
            >
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

                  <p className="widget-box-title">Friends Activity</p>

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
                          <a
                            className="highlighted"
                            href="profile-timeline.html"
                          >
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
                          <a
                            className="highlighted"
                            href="profile-timeline.html"
                          >
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
                          <a
                            className="highlighted"
                            href="profile-timeline.html"
                          >
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
                          <a
                            className="highlighted"
                            href="profile-timeline.html"
                          >
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
                          <a
                            className="highlighted"
                            href="profile-timeline.html"
                          >
                            profile
                          </a>
                        </p>

                        <p className="user-status-timestamp">41 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ListNewsfeed />
            </div>
          }
        />
        <Route path="/photosProfile" element={<PhotosGroup />} />
      </Routes>
    </div>
  );
}

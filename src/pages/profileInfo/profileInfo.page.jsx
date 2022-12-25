import React from "react";
import { Route, Routes } from "react-router-dom";
import FriendsProfile from "./friends/friends.profile";
import GroupsProfile from "./groups/groups.profile";
import PhotosProfile from "./photos/photos.profile";
import SectionNavProfile from "./sectionNav.profile";
import ListNewsfeed from "../../components/listNewsfeed/listNewsfeed.component";
import InfoProfile from "./info/info.profile";
import ProfileHeader from "./profileHeader.profile";

export default function ProfileInfoPage() {
  return (
    <div className="content-grid">
      <ProfileHeader />
      <SectionNavProfile />
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="grid grid-3-6-3 mobile-prefer-content"
              style={{ marginTop: 20 }}
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
                    </div>
                  </div>
                </div> */}
              </div>

              <ListNewsfeed />
            </div>
          }
        />
        <Route path="/photosProfile" element={<PhotosProfile />} />
        <Route path="/groupsProfile" element={<GroupsProfile />} />
        <Route path="/friendsProfile" element={<FriendsProfile />} />
        <Route path="/infoProfile" element={<InfoProfile />} />
      </Routes>
    </div>
  );
}

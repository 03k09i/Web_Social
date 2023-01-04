import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInfoUser } from "../../../store/reducers/user.reducer";
import ClickOutside from "../../clickOutside/clickOutside.component";

export default function SettingsHeader() {
  const checkOutside = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailUser } = useSelector((state) => state.user);
  const [colorIconSetting, setColorIconSetting] = useState("primary:#ffffff");
  const [dropdownSetting, setDropdownSetting] = useState(false);
  return (
    <div className="action-item-wrap" ref={checkOutside}>
      <div
        className="action-item dark header-settings-dropdown-trigger"
        onMouseEnter={() => {
          if (!dropdownSetting) {
            setColorIconSetting("primary:#ffffff");
          }
        }}
        onMouseLeave={() => {
          if (!dropdownSetting) {
            setColorIconSetting("primary:#3d3c55");
          }
        }}
        onClick={() => setDropdownSetting(!dropdownSetting)}
      >
        <lord-icon
          src="https://cdn.lordicon.com/ryyjawhw.json"
          trigger="hover"
          colors={colorIconSetting}
        ></lord-icon>
      </div>
      {dropdownSetting ? (
        <div
          className="dropdown-navigation header-settings-dropdown"
          style={{ position: "absolute", transform: "translate(-75%, -20px)" }}
        >
          <ClickOutside
            checkOutside={checkOutside}
            setCloseModal={setDropdownSetting}
          />
          <div className="dropdown-navigation-header">
            <div className="user-status">
              <NavLink className="user-status-avatar" to={`/profile/${detailUser._id}`}>
                <div className="user-avatar small no-outline">
                  <div className="user-avatar-content">
                    <img
                      src={
                        detailUser?.avatar?.link ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                      }
                      className="image-avatar-40"
                      alt="error"
                    />
                  </div>
                </div>
              </NavLink>
              <p className="user-status-title">
                <span className="bold">{detailUser?.name}</span>
              </p>
              {/* <p className="user-status-text small">
                <a href="profile-timeline.html">@marinavalentine</a>
              </p> */}
            </div>
          </div>

          <p className="dropdown-navigation-category">My Profile</p>

          <NavLink
            className="dropdown-navigation-link"
            to={`/profile/${detailUser._id}`}
          >
            Profile Info
          </NavLink>

          {/* <a
            className="dropdown-navigation-link"
            href="hub-profile-social.html"
          >
            Social &amp; Stream
          </a>

          <a
            className="dropdown-navigation-link"
            href="hub-profile-notifications.html"
          >
            Notifications
          </a>

          <a
            className="dropdown-navigation-link"
            href="hub-profile-messages.html"
          >
            Messages
          </a>

          <a
            className="dropdown-navigation-link"
            href="hub-profile-requests.html"
          >
            Friend Requests
          </a> */}

          <p
            className="dropdown-navigation-button button small secondary"
            onClick={async () => {
              await Cookies.remove("token");
              await Cookies.remove("_id");
              await dispatch(setInfoUser());
              navigate("/auth/login");
            }}
          >
            Logout
          </p>
        </div>
      ) : null}
    </div>
  );
}

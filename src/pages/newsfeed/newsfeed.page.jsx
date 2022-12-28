import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListNewsfeed from "../../components/listNewsfeed/listNewsfeed.component";
import SidebarOnHeader from "../../components/sidebar/sidebarOn";
import PostNewsfeed from "./postNewsfeed/postNewsfeed.newsfeed";
import {
  getChannelAction,
  getListChannelAction,
} from "../../store/actions/channel.actions";
import { getSuggestionAction } from "../../store/actions/user.actions"

export default function NewsfeedPage() {

  //redux
  const dispatch = useDispatch();
  // state
  const [listChanel, setlistChanel] = useState([]);
  const [listSuggestion, setSuggestion] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getListChannelAction())
      await setlistChanel(res)
      const res1 = await dispatch(getSuggestionAction())
      await setSuggestion(res1)
    }
    fetchData();
  }, [dispatch])


  return (
    <div className="content-grid">
      <div
        className="grid grid-3-6-3 mobile-prefer-content"
        style={{ marginTop: 0 }}
      >
        <div className="grid-column">
          <SidebarOnHeader />
        </div>
        <div className="grid-column">
          <PostNewsfeed />
          <ListNewsfeed />
        </div>
        <div className="grid-column">
          <div style={{ width: "400px" }}><div className="widget-box">
            <div className="widget-box-settings">
              <div className="post-settings-wrap">

              </div>
            </div>

            <p className="widget-box-title">Liên Hệ</p>

            <div className="widget-box-content" style={{ "minHeight": "300px" }}>
              <div className="user-status-list">

                {listChanel.map((itemChannel, index) => {
                  if (index < 5) {
                    return (<div key={index} className="user-status" >
                      <NavLink style={{ display: "flex", alignItems: "center" }}
                        className="user-status-avatar"
                        to={`/message/${itemChannel._id}`}
                      >
                        <div className="user-avatar small no-outline">
                          <div className="user-avatar-content" >
                            <img
                              className="image-avatar-40"
                              src={
                                itemChannel?.avatar ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                              }
                              alt="error"
                            />
                          </div>
                        </div>


                        <p className="user-status-title" style={{ marginLeft: "15px" }} >
                          <a className="bold" href="profile-timeline.html">
                            {itemChannel?.name}
                          </a>
                        </p>
                      </NavLink>
                    </div>)
                  }
                })}
              </div>
            </div>
          </div>

            <div className="widget-box" style={{ marginTop: "15px" }}>
              <div className="widget-box-settings">
                <div className="post-settings-wrap">
                </div>
              </div>

              <p className="widget-box-title">Gợi ý kết bạn </p>

              <div className="widget-box-content" style={{ "minHeight": "300px" }}>
                <div className="user-status-list" style={{ "marginLeft": "5px" }}>
                  {listSuggestion.map((itemSuggestion, index) => (
                    <div key={index} className="user-status" >
                      <NavLink style={{ display: "flex", alignItems: "center" }}
                        className="user-status-avatar"
                        to={`/profile/${itemSuggestion._id}`}
                      >
                        <div className="user-avatar small no-outline">
                          <div className="user-avatar-content" >
                            <img
                              className="image-avatar-40"
                              src={
                                itemSuggestion?.avatar?.link ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                              }
                              alt="error"
                            />
                          </div>
                        </div>


                        <p className="user-status-title" style={{ marginLeft: "15px" }} >
                          <a className="bold" href="profile-timeline.html">
                            {itemSuggestion?.name}
                          </a>
                        </p>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div></div>

        </div>
      </div>
    </div>
  );
}

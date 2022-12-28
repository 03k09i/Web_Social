import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { getSuggestionAction } from "../../store/actions/user.actions"
// import {}
// // getListFriendRequestAction
// // getListFriendAction
export default function friendList() {
  //redux
  const dispatch = useDispatch();
  // state
  const [indexActive, setIndexActive] = useState(0);
  const [listSuggestion, setSuggestion] = useState([])
  const [listFriend, setFriend] = useState([])
  const [listRequest, setRequest] = useState([])
  const [listUser, setUser] = useState([])

  const changeActive = async (index) => {
    await setIndexActive(index)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await dispatch(getListChannelAction())
  //     await setlistChanel(res)
  //     const res1 = await dispatch(getSuggestionAction())
  //     await setSuggestion(res1)
  //   }
  //   fetchData();
  // }, [dispatch])

  return (
    <div className="contentFriendPage">
      <div className="grid grid-3-9">
        <div className="grid-column widget-box widget-box-friend">
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-item-link">Bạn bè</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link">Lời mời kết bạn</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link">Gợi ý kết bạn</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link">Tìm bạn bè mới</a>
            </li>
          </ul>
        </div>
        <div className="grid-column widget-box widget-box-content-friend">
          <div>
            <div className="interactive-input small">
              <input
                type="text"
                id="chat-widget-search-2"
                name="chat_widget_search_2"
                placeholder="Search Messages..."
              />
              <div className="interactive-input-icon-wrap">
                <svg className="interactive-input-icon icon-magnifying-glass">
                  <use xlinkHref="#svg-magnifying-glass" />
                </svg>
              </div>
              <div className="interactive-input-action">
                <svg className="interactive-input-action-icon icon-cross-thin">
                  <use xlinkHref="#svg-cross-thin" />
                </svg>
              </div>
            </div>
            <div className="content-list-friend grid grid-6-6">
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend">
                  <div className=" img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className=" info-friend">
                    <div className="content-info-friend">
                      <p>Cong Tan</p>
                      <p>congtan@gmail.com</p>
                      <p>Nam</p>
                      <p>0963626559</p>
                    </div>
                  </div>
                  <div className=" status-friend">
                    <Button variant="contained">Accept</Button>
                    <Button variant="outlined">Reject</Button>
                  </div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
              <div className="grid-column">
                <div className="item-friend grid grid-3-6-3">
                  <div className="grid-column img-friend">
                    <img src="https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png" />
                  </div>
                  <div className="grid-column info-friend">
                    <div className="content-info-friend">
                      <div className="name-info-friend">
                        <p>Cong Tan</p>
                        <p>congtan@gmail.com</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="grid-column status-friend">h3</div>
                </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

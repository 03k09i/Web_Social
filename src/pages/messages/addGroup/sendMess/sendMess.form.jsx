import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdOutlineUploadFile } from "react-icons/md";
import { sendMessageAction } from "../../../../store/actions/message.actions";

export default function SendMessForm() {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => state.socket);
  const { detailUser } = useSelector((state) => state.user);
  const { idChannel } = useParams();
  const [mess, setMess] = useState("");

  const inputMess = (e) => {
    setMess(e.target.value);
    socket.emit("typing_to_server", detailUser._id, idChannel, 1);
  };
  const offWaitChat = async (e) => {
    setTimeout(() => {
      if (mess === e.target.value) {
        socket.emit("typing_to_server", detailUser._id, idChannel, 0);
      }
    }, 2000);
  };
  const sendMess = () => {
    socket.emit("sendMessage", {
      message: { mess, idChannel },
      room: idChannel,
    });
    dispatch(sendMessageAction(idChannel, mess));
    setMess("");
  };
  return (
    <form
      className="chat-widget-form"
      onSubmit={(e) => {
        e.preventDefault();
        sendMess();
      }}
    >
      <div className="form-row split">
        <div
          className="form-item auto-width"
          style={{ display: "flex", alignItems: "center" }}
        >
          <MdOutlineUploadFile className="wh-icon25" />
        </div>
        <div className="form-item">
          <div className="interactive-input small">
            <input
              type="text"
              value={mess}
              placeholder="Write a message..."
              onChange={inputMess}
              onKeyUp={offWaitChat}
            />
            <div className="interactive-input-icon-wrap actionable">
              <div
                className="tooltip-wrap text-tooltip-tft"
                data-title="Send Photo"
              >
                <svg className="interactive-input-icon icon-friend">
                  <use xlinkHref="#svg-friend" />
                </svg>
              </div>
              {/* <div className="simple-dropdown widget-box-post-settings-dropdown">
                      <p className="simple-dropdown-link">Report</p>
                      <p className="simple-dropdown-link">Block</p>
                      <p className="simple-dropdown-link">Mute</p>
                    </div> */}
            </div>
            <div className="interactive-input-action">
              <svg className="interactive-input-action-icon icon-cross-thin">
                <use xlinkHref="#svg-cross-thin" />
              </svg>
            </div>
          </div>
        </div>
        <div className="form-item auto-width">
          <p className="button primary padded" onClick={() => sendMess(mess)}>
            <svg className="button-icon no-space icon-send-message">
              <use xlinkHref="#svg-send-message" />
            </svg>
          </p>
        </div>
      </div>
    </form>
  );
}

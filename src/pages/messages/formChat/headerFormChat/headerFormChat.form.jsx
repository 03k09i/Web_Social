import React from "react";
import { useSelector } from "react-redux";

export default function HeaderFormChat(props) {
  const { detailUser } = useSelector((state) => state.user);
  const { onSetupChat, setOnSetupChat, detailChannel } = props;
  return (
    <div
      className="chat-widget-header"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="user-status">
        <div className="user-status-avatar">
          <div className="user-avatar small no-outline online">
            <div className="user-avatar-content">
              <img
                src={
                  detailChannel?.num_member === 2
                    ? detailChannel?.user.filter(
                        (item) => item._id !== detailUser._id,
                      )[0]?.avatar?.link
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIF-ADKJNVFO7YMDeeSGCQzbpd49voN4FnMqdoH-Hlx38FzOlHjYbeVug3RKFfrAfnOU&usqp=CAU"
                }
                className="image-avatar-40"
              />
            </div>
          </div>
        </div>
        <p className="user-status-title">
          <span className="bold">
            {detailChannel?.name ||
              detailChannel?.user.filter(
                (item) => item._id !== detailUser._id,
              )[0].name}
          </span>
        </p>
        <p className="user-status-tag online">Online</p>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 120,
          justifyContent: "space-between",
        }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/axyzxviq.json"
          trigger="hover"
          class="form-chat-icon40"
          colors="primary:#adafca"
          style={{ width: 40, height: 40 }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/cnyeuzxc.json"
          trigger="hover"
          class="form-chat-icon40"
          colors="primary:#adafca"
          style={{ width: 40, height: 40 }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/aixyixpa.json"
          trigger="hover"
          class="form-chat-icon40"
          colors="primary:#adafca"
          style={{ width: 40, height: 40 }}
          onClick={() => setOnSetupChat(!onSetupChat)}
        ></lord-icon>
      </div> */}
    </div>
  );
}

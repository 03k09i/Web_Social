import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ChatRightForm from "./chatRight/chatRight.form";
import ChatLeftForm from "./chatLeft/chatLeft.form";
import WaitChatLeftMess from "./waitChatLeft.mess";
import StartChatMess from "./startChat.mess";
import SendMessForm from "./sendMess/sendMess.form";
import HeaderFormChat from "./headerFormChat/headerFormChat.form";
import useOnScreen from "../../../hooks/useOnScreen";
import IconDropDownMess from "./iconDropDown.mess";
import LoadingComponent from "../../../components/loading/loading.component";
import {
  getMessageAction,
  readMessageAction,
} from "../../../store/actions/message.actions";
import {
  getChannelAction,
  getListChannelAction,
} from "../../../store/actions/channel.actions";
import AddGroupMess from "../addGroup/addGroup.mess";

export default function FormChatMess(props) {
  const endForm = useRef(null);
  const atBottom = useOnScreen(endForm);
  const { idChannel } = useParams();
  const { onSetupChat, setOnSetupChat } = props;
  //redux
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.user);
  const { socket } = useSelector((state) => state.socket);
  // state
  const [listMess, setListMess] = useState();
  const [detailChannel, setDetailChannel] = useState();
  const [pageMess, setPageMess] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [entering, setEntering] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (idChannel !== "new") {
        endForm.current.scrollIntoView({ block: "end", behavior: "smooth" });
        await dispatch(readMessageAction(idChannel));
        await dispatch(getListChannelAction());
        const res = await dispatch(getMessageAction(idChannel, 1));
        const res1 = await dispatch(getChannelAction(idChannel));
        setDetailChannel(res1);
        await setListMess(res);
        await setPageMess(1);
        await setHasMore(true);
        socket.emit("joinchat", { user_id: detailUser._id, room: idChannel });
        socket.on("message", async (data) => {
          if (data.message.idChannel === idChannel) {
            await dispatch(readMessageAction(idChannel));
            const res1 = await dispatch(getMessageAction(idChannel, 1));
            dispatch(getListChannelAction());
            setListMess(res1);
          }
        });
        socket.on("typing_to_client", (sender, room, typing_status) => {
          if (sender !== detailUser._id && room === idChannel) {
            setEntering(typing_status);
          }
        });
      }
    };
    fetchData();
    return () => {
      if (idChannel) {
        socket.emit("leaveChat", { room: idChannel });
      }
    };
  }, [idChannel, socket, dispatch]);

  const dropDown = () => {
    endForm.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const callMessNext = async () => {
    const res = await dispatch(getMessageAction(idChannel, pageMess + 1));
    if (!res) {
      await setHasMore(false);
      return;
    }
    await setListMess([].concat(listMess, res));
    await setPageMess(pageMess + 1);
  };

  const showListMess = (listMess) => {
    let result = null;
    if (listMess?.length > 0) {
      result = listMess.map((itemMess, index) => {
        if (itemMess.user._id === detailUser._id) {
          return (
            <ChatRightForm
              key={index}
              itemMess={itemMess}
              onSeen={
                listMess[index - 1]?.user._id !== detailUser._id ? true : false
              }
              onReply={
                listMess[index + 1]?.user._id !== detailUser._id ? true : false
              }
            />
          );
        } else {
          return (
            <ChatLeftForm
              key={index}
              itemMess={itemMess}
              onSeen={
                !listMess[index - 1] ||
                listMess[index - 1].user._id !== itemMess.user._id
                  ? true
                  : false
              }
              onReply={
                listMess[index + 1]?.user._id !== itemMess.user._id
                  ? true
                  : false
              }
            />
          );
        }
      });
    }
    return result;
  };

  return idChannel !== "new" ? (
    <div className="chat-widget" style={{ width: "70%" }}>
      <HeaderFormChat
        onSetupChat={onSetupChat}
        setOnSetupChat={setOnSetupChat}
        detailChannel={detailChannel}
      />
      <div
        id="scrollableDiv"
        className="chat-widget-conversation scroll-bar"
        style={{
          height: window.innerHeight - 120 - 87.8 - 92,
          padding: 10,
          backgroundColor: "#f3f2f7",
          position: "relative",
          display: "flex",
          flexDirection: "column-reverse",
          overflowY: "scroll",
        }}
      >
        <InfiniteScroll
          scrollThreshold={0.75}
          data-simplebar
          dataLength={listMess?.length || 0}
          next={() => callMessNext()}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            overflow: "hidden",
          }}
          inverse={true}
          hasMore={hasMore}
          loader={<LoadingComponent />}
          endMessage={<StartChatMess />}
          scrollableTarget="scrollableDiv"
        >
          <div ref={endForm}></div>
          {entering === 1 ? <WaitChatLeftMess /> : null}
          {showListMess(listMess)}
          {/* <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: 5,
            }}
          >
            <p style={{ padding: 3, fontSize: 14 }}>kiet d</p>
          </div> */}
        </InfiniteScroll>
      </div>
      {atBottom ? null : <IconDropDownMess dropDown={dropDown} />}
      <SendMessForm />
    </div>
  ) : (
    <AddGroupMess />
  );
}

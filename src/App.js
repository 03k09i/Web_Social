import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import { io } from "socket.io-client";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Auth from "./pages/auth/auth.page";
import Home from "./pages/home/home.page";
import LoadingPage from "./pages/loading/loading.page";
import { getInfoUserAction } from "./store/actions/user.actions";
import {
  getListFriendRequestAction,
  getListFriendAction,
} from "./store/actions/friend.actions";
import { getListChannelAction } from "./store/actions/channel.actions";
import { setSocket } from "./store/reducers/socket.reducer";
import { setCheckLogin } from "./store/reducers/user.reducer";
import { getNotifyAction } from "./store/actions/notify.actions";
import Swal from "sweetalert2";

AOS.init({ duration: 900 });
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function App() {
  const dispatch = useDispatch();
  const { detailUser, checkLogin } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getInfo = async () => {
      const token = Cookies.get("token");
      if (token && checkLogin) {
        const res = await dispatch(getInfoUserAction());
        await dispatch(getListFriendRequestAction());
        await dispatch(getListChannelAction());
        await dispatch(getListFriendAction());
        await dispatch(getNotifyAction());
        const socket = io("http://localhost:8088");
        await dispatch(setSocket(socket));
        if (res) {
          socket.emit("userJoin", {
            _id: res?._id,
            friend: res?.friend,
          });
          socket.on("channel message", async (data) => {
            dispatch(getListChannelAction());
          });
          socket.on("likepostclient", async (data) => {
            Toast.fire({
              icon: "success",
              title: "Có thông báo đến bạn",
            });
            await dispatch(getNotifyAction());
          });
          socket.on("likecommentclient", async (data) => {
            Toast.fire({
              icon: "success",
              title: "Có thông báo đến bạn",
            });
            await dispatch(getNotifyAction());
          });
          socket.on("commentpostclient", async (data) => {
            Toast.fire({
              icon: "success",
              title: "Có thông báo đến bạn",
            });
            await dispatch(getNotifyAction());
          });
          socket.on("replycommentpostclient", async (data) => {
            Toast.fire({
              icon: "success",
              title: "Có thông báo đến bạn",
            });
            await dispatch(getNotifyAction());
          });
        }
      } else {
        dispatch(setCheckLogin(-1));
      }
      setLoading(false);
    };
    getInfo();
  }, [dispatch, checkLogin]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={detailUser ? <Home /> : <Navigate replace to="/auth" />}
        />
        <Route
          path="/auth/*"
          element={detailUser ? <Navigate replace to="/" /> : <Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

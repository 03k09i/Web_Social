import { configureStore } from "@reduxjs/toolkit";
import ChannelReducer from "./channel.reducer";
import FriendReducer from "./friend.reducer";
import NotifyReducer from "./notify.reducer";
import PopupNewsfeedReducer from "./popupNewsfeed.reducer";
import PostReducer from "./post.reducer";
import SocketReducer from "./socket.reducer";
import UserReducer from "./user.reducer";
import savepostReducer from "./savepost.reducer";
import shortcutReducer from "./shortcut.reducer";

export default configureStore({
  reducer: {
    popupNewsfeed: PopupNewsfeedReducer,
    user: UserReducer,
    friend: FriendReducer,
    socket: SocketReducer,
    channel: ChannelReducer,
    post: PostReducer,
    notify: NotifyReducer,
    savepost:savepostReducer,
    shortcut:shortcutReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

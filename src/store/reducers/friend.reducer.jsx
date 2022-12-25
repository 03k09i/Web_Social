import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFriendRequest: [],
  listFriend: [],
};

export const FriendReducer = createSlice({
  name: "friend",
  initialState,
  reducers: {
    getListFriendRequest: (state, action) => {
      state.listFriendRequest = action.payload;
    },
    getListFriend: (state, action) => {
      state.listFriend = action.payload;
    },
  },
});

export const { getListFriendRequest, getListFriend } = FriendReducer.actions;

export default FriendReducer.reducer;

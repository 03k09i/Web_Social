import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFriendRequest: [],
  listFriend: [],
  listFriendUser: []
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
    getListFriendUser:(state,action)=>{
      state.listFriendUser=action.payload;
    }
  },
});

export const { getListFriendRequest, getListFriend,getListFriendUser } = FriendReducer.actions;

export default FriendReducer.reducer;

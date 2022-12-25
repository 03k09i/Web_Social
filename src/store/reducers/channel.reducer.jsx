import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listChannel: [],
};

export const ChannelReducer = createSlice({
  name: "channel",
  initialState,
  reducers: {
    getListChannel: (state, action) => {
      state.listChannel = action.payload;
    },
  },
});

export const { getListChannel } = ChannelReducer.actions;

export default ChannelReducer.reducer;

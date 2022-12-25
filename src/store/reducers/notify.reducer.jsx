import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNotify: [],
};

export const NotifyReducer = createSlice({
  name: "notify",
  initialState,
  reducers: {
    getListNotify: (state, action) => {
      state.listNotify = action.payload;
    },
  },
});

export const { getListNotify } = NotifyReducer.actions;

export default NotifyReducer.reducer;

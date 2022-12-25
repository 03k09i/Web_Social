import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: "",
};

export const SocketReducer = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = SocketReducer.actions;

export default SocketReducer.reducer;

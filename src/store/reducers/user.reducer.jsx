import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailUser: "",
  checkLogin: 1,
  listSuggestion: [],
  listAllUser: []
};

export const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      state.detailUser = action.payload;
      if (action.payload) {
        state.checkLogin = 1;
      } else {
        state.checkLogin = -1;
      }
    },
    setCheckLogin: (state, action) => {
      state.checkLogin = action.payload;
    },
    setSuggestion: (state, action) => {
      state.listSuggestion = action.payload
    },
    setAllUser: (state, action) => {
      state.listAllUser = action.payload
    }
  },
});

export const { setInfoUser, setCheckLogin, setSuggestion, setAllUser } = UserReducer.actions;

export default UserReducer.reducer;

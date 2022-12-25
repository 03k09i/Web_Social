import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopupNewsfeed: false,
};

export const PopupNewsfeedReducer = createSlice({
  name: "popupNewsfeed",
  initialState,
  reducers: {
    onPopupNewsfeed: (state, action) => {
      state.showPopupNewsfeed = true;
    },
    offPopupNewsfeed: (state, action) => {
      state.showPopupNewsfeed = false;
    },
  },
});

export const { onPopupNewsfeed, offPopupNewsfeed } =
  PopupNewsfeedReducer.actions;

export default PopupNewsfeedReducer.reducer;

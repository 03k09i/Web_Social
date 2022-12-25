import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPost: [],
};

export const PostReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setListPost: (state, action) => {
      state.listPost = action.payload;
    },
  },
});

export const { setListPost } = PostReducer.actions;

export default PostReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSavePost: [],
};

export const SavePostReducer = createSlice({
    name: "savepost",
    initialState,
    reducers: {
        setListSavePost: (state, action) => {
            state.listSavePost = action.payload;
        },
    },
});

export const { setListSavePost } = SavePostReducer.actions;

export default SavePostReducer.reducer;

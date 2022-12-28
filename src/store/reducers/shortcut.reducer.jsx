import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listShortCut: [],
};

export const ShortCutReducer = createSlice({
    name: "shortcut",
    initialState,
    reducers: {
        setListShortCut: (state, action) => {
            state.listShortCut = action.payload;
        },
    },
});

export const { setListShortCut } = ShortCutReducer.actions;

export default ShortCutReducer.reducer;

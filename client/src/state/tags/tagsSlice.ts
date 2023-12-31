import { Tag } from "../../types";
import { createSlice } from "@reduxjs/toolkit";

interface TagsSlice {
    tags: Tag[];
}

const initialState: TagsSlice = {
    tags: [],
};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        update: (state, action) => {
            state.tags = action.payload;
        },
    },
});

export const { update } = tagsSlice.actions;

export default tagsSlice.reducer;

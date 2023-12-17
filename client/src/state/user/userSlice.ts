import User from "../../types/User";
import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    user: User | null;
}

const initialState: UserSlice = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

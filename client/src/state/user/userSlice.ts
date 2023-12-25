import { User } from "../../types";
import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: UserSlice = {
    isAuthenticated: false,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

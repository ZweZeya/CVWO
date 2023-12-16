import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
    isAuthenticated: boolean;
}

const initialState: UserSlice = {
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

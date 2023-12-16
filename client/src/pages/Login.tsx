// import { instance } from "../config/axios.config";
import { RootState } from "../state/store";
import { login, logout } from "../state/user/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage: React.FC = () => {
    // const userData = {
    //     username: "john_doe",
    //     password: "JohnDoe123",
    // };
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    console.log(user);
    const handleLogin = async () => {
        // console.log(
        //     await instance({
        //         method: "post",
        //         url: "auth/login",
        //         data: {
        //             password: "john_doe",
        //             username: "JohnDoe123",
        //         },
        //     }),
        // );
        dispatch(login());
        // console.log(await instance.post("/auth/login", JSON.stringify(userData)));
    };

    const handleLogout = async () => {
        // console.log(await instance.get("/auth/logout"));
        dispatch(logout());
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LoginPage;

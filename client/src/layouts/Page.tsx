import { instance } from "../config/axios.config";
import { login, logout } from "../state/user/userSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        instance
            .get("/user")
            .then((res) => {
                dispatch(login(res.data));
            })
            .catch(() => dispatch(logout()));
    }, []);

    return <main>{children}</main>;
};

export default Page;

import styles from "./Page.module.scss";
import { instance } from "../../config/axios.config";
import { login, logout } from "../../state/user/userSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const Page = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        instance
            .get("/user")
            .then((res) => {
                dispatch(login(res.data));
            })
            .catch(() => dispatch(logout()));
    }, []);

    return (
        <main className={styles.container} style={style}>
            {children}
        </main>
    );
};

export default Page;

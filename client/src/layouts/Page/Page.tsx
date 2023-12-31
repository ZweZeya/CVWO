import styles from "./Page.module.scss";
import { instance } from "../../config/axios.config";
import { login, logout } from "../../state/user/userSlice";
import { update } from "../../state/tags/tagsSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const Page = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const init = async () => {
            const userRes = await instance.get("/user");
            dispatch(login(userRes.data));
            const tagsRes = await instance.get("/tags");
            dispatch(update(tagsRes.data));
        };
        init().catch(() => dispatch(logout()));
    }, []);

    return (
        <main className={styles.container} style={style}>
            {children}
        </main>
    );
};

export default Page;

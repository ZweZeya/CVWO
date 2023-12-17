import { instance } from "../config/axios.config";
import Page from "../layouts/Page";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const userData = {
        password: "john_doe",
        username: "JohnDoe123",
    };

    const handleLogin = async () => {
        await instance.post("/auth/login", userData);
        return navigate("/");
    };

    return (
        <Page>
            <button onClick={handleLogin}>Login</button>
        </Page>
    );
};

export default LoginPage;

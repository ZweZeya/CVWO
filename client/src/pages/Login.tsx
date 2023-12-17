import { instance } from "../config/axios.config";
// import { Navigate } from "react-router-dom";
import React from "react";

const LoginPage: React.FC = () => {
    const userData = {
        password: "john_doe",
        username: "JohnDoe123",
    };

    const handleLogin = async () => {
        await instance.post("/auth/login", userData);
        // return <Navigate to="/" replace />;
        window.location.reload();
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;

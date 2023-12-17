import { instance } from "../config/axios.config";
// import { Navigate } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    const handleLogout = async () => {
        await instance.get("/auth/logout");
        // return <Navigate to="/login" replace />;
        window.location.reload();
    };

    return (
        <>
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Home;

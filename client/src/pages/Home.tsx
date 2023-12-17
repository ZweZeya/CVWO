import { instance } from "../config/axios.config";
import Page from "../layouts/Page/Page";
import { useNavigate } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await instance.get("/auth/logout");
        setTimeout(() => navigate("/login"), 2000);
        // return navigate("/login");
    };

    return (
        <Page>
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </Page>
    );
};

export default Home;

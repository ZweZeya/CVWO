import Page from "../../layouts/Page/Page";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";

const Home: React.FC = () => {
    return (
        <Page>
            <NavBar />
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
        </Page>
    );
};

export default Home;

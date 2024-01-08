import NavBar from "../../components/NavBar/NavBar";
import Page from "../../layouts/Page/Page";
import { useParams } from "react-router-dom";
import React, { FC } from "react";

const PostPage: FC = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <Page>
            <NavBar />
        </Page>
    );
};

export default PostPage;

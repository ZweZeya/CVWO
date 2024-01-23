import ViewPage from "../../layouts/ViewPage/ViewPage";
import PostsTemplate from "../../components/Post/PostsTemplate/PostsTemplate";
import React from "react";

const Home: React.FC = () => {
    return (
        <ViewPage>
            <PostsTemplate />
        </ViewPage>
    );
};

export default Home;

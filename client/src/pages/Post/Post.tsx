// import styles from "./Post.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Page from "../../layouts/Page/Page";
import PostView from "../../components/Post/PostView/PostView";
import { usePost } from "../../hooks/usePost";
import { Post } from "../../types";
import { useParams } from "react-router-dom";
import React, { FC } from "react";

const PostPage: FC = () => {
    const { id } = useParams();
    const { data } = usePost(parseInt(id as string));
    return (
        <Page>
            <NavBar />
            {data && <PostView post={data as Post} />}
        </Page>
    );
};

export default PostPage;

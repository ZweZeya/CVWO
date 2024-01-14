// import styles from "./Post.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Page from "../../layouts/Page/Page";
import PostView from "../../components/Post/PostView/PostView";
import CommentCard from "../../components/Comment/CommentCard/CommentCard";
import { usePost, useComments } from "../../hooks";
import { Post } from "../../types";
import { useParams } from "react-router-dom";
import React, { FC } from "react";

const PostPage: FC = () => {
    const { id } = useParams();
    const { data: post } = usePost(parseInt(id as string));
    const { data: comments } = useComments(parseInt(id as string));

    return (
        <Page>
            <NavBar />
            {post && <PostView post={post as Post} />}
            {comments?.map((c) => (
                <CommentCard key={c.ID} comment={c} />
            ))}
        </Page>
    );
};

export default PostPage;

import styles from "./Post.module.scss";
import ViewPage from "../../layouts/ViewPage/ViewPage";
import PostView from "../../components/Post/PostView/PostView";
import CommentCard from "../../components/Comment/CommentCard/CommentCard";
import { usePost, useComments } from "../../hooks";
import CommentForm from "../../components/Comment/CommentForm/CommentForm";
import { useParams, useNavigate } from "react-router-dom";
import React, { FC, useEffect, Fragment } from "react";
import { Box } from "@mui/material";

const PostPage: FC = () => {
    const { id } = useParams();
    const { data: post } = usePost(parseInt(id as string));
    const { data: comments } = useComments(parseInt(id as string));
    const navigate = useNavigate();

    useEffect(() => {
        if (post && post.ID === 0) navigate("/error");
    }, []);

    return (
        <ViewPage>
            {post && (
                <Fragment>
                    <PostView post={post} />
                    <CommentForm post={post} />
                    <Box className={styles.commentsContainer}>
                        {comments?.map((c) => (
                            <CommentCard key={c.ID} comment={c} />
                        ))}
                    </Box>
                </Fragment>
            )}
        </ViewPage>
    );
};

export default PostPage;

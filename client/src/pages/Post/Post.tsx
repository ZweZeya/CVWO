import styles from "./Post.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Page from "../../layouts/Page/Page";
import PostView from "../../components/Post/PostView/PostView";
import CommentCard from "../../components/Comment/CommentCard/CommentCard";
import { usePost, useComments } from "../../hooks";
import CommentForm from "../../components/Comment/CommentForm/CommentForm";
import { useParams, useNavigate } from "react-router-dom";
import React, { FC, useEffect, Fragment } from "react";
import { Box, Grid } from "@mui/material";

const PostPage: FC = () => {
    const { id } = useParams();
    const { data: post } = usePost(parseInt(id as string));
    const { data: comments } = useComments(parseInt(id as string));
    const navigate = useNavigate();

    useEffect(() => {
        if (post && post.ID === 0) navigate("/error");
    }, []);

    return (
        <Page>
            <NavBar />
            <Box className={styles.body}>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={7}>
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
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Box>
        </Page>
    );
};

export default PostPage;

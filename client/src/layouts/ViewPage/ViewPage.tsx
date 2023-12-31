import styles from "./ViewPage.module.scss";
import Page from "../Page/Page";
import NavBar from "../../components/NavBar/NavBar";
import PostCard from "../../components/PostCard/PostCard";
import { usePosts, useTags } from "../../hooks";
import { Box, Grid, InputBase } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";

const ViewPage = () => {
    const handleCreatePostClick = () => {};
    const { data: posts } = usePosts();
    const postElements = posts?.map((post) => <PostCard key={post.ID} post={post} />);
    const tags = useTags();
    console.log(tags);

    return (
        <Page>
            <NavBar />
            <Box className={styles.body}>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={7}>
                        <Box className={styles.createPostContainer} onClick={handleCreatePostClick}>
                            <InputBase placeholder="Create Post" className={styles.createPostInput} />
                            <CreateIcon />
                        </Box>
                        <Box className={styles.posts}>{postElements}</Box>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Box>
        </Page>
    );
};

export default ViewPage;

import styles from "./PostsTemplate.module.scss";
import { usePosts } from "../../../hooks";
import PostCard from "../PostCard/PostCard";
import { Box, InputBase } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import React, { Fragment } from "react";

const PostsTemplate = () => {
    const navigate = useNavigate();
    const { data: posts } = usePosts();
    const postElements = posts?.map((post) => <PostCard key={post.ID} post={post} />);

    return (
        <Fragment>
            <Box className={styles.createPostContainer} onClick={() => navigate("/create")}>
                <InputBase placeholder="Create Post" className={styles.createPostInput} />
                <CreateIcon />
            </Box>
            <Box className={styles.posts}>{postElements}</Box>
        </Fragment>
    );
};

export default PostsTemplate;

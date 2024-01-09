import styles from "./PostView.module.scss";
import PostUser from "../PostUser/PostUser";
import { Post } from "../../../types";
import { Box } from "@mui/material";
import React from "react";

const PostView = ({ post }: { post: Post }) => {
    return (
        <Box>
            <Box className={styles.postContainer}>
                <p className={styles.title}>{post.Title}</p>
                <PostUser post={post} />
                <p className={styles.content}>{post.Content}</p>
            </Box>
            <Box></Box>
        </Box>
    );
};

export default PostView;

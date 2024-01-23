import styles from "./PostCard.module.scss";
import { Post } from "../../../types";
import TagBox from "../../TagBox/TagBox";
import PostUser from "../PostUser/PostUser";
import PostStat from "../PostStat/PostStat";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
    const navigate = useNavigate();

    return (
        <Box className={styles.container} onClick={() => navigate(`/post/${post.ID}`)}>
            <p className={styles.title}>{post.Title}</p>
            <Box className={styles.midBar}>
                <PostUser post={post} />
                <TagBox tagId={post.TagId} tagName={post.TagName} className={styles.tag} />
            </Box>
            <p className={styles.content}>{post.Content}</p>
            <PostStat post={post} />
        </Box>
    );
};

export default PostCard;

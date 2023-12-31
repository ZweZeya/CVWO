import styles from "./PostCard.module.scss";
import { Post } from "../../types";
import { useTags } from "../../hooks";
import { Box } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
    const tags = useTags();
    console.log(tags);
    return (
        <Box className={styles.container} onClick={() => console.log(post)}>
            <h2 className={styles.title}>{post.Title}</h2>
            <Box className={styles.user}>
                <AccountBoxIcon fontSize="large" />
                <Box>{post.Username}</Box>
            </Box>
            <p className={styles.content}>{post.Content}</p>
            <Box className={styles.stats}>
                <Box className={styles.statItem}>
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    <Box>{post.CommentsCount}</Box>
                </Box>
                <Box className={styles.statItem}>
                    <ThumbUpOutlinedIcon fontSize="small" />
                    <Box>{post.UpVotesCount}</Box>
                </Box>
                <Box className={styles.statItem}>
                    <ThumbDownAltOutlinedIcon fontSize="small" />
                    <Box>{post.DownVotesCount}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PostCard;

import styles from "./PostStat.module.scss";
import { Post } from "../../../types";
import { Box } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import React from "react";

const PostStat = ({ post }: { post: Post }) => {
    return (
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
    );
};

export default PostStat;

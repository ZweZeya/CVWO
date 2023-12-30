import styles from "./PostCard.module.scss";
import { Post } from "../../types";
import { Box } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <Box className={styles.container} onClick={() => console.log(post)}>
            <h2>{post.Title}</h2>
            {/* {post.Content} */}
            <Box className={styles.stats}>
                <Box className={styles.voteCountContainer}>
                    <Box className={styles.voteCount}>
                        <ThumbUpOutlinedIcon fontSize="small" />
                        <p>{post.UpVotesCount}</p>
                    </Box>
                    <Box className={styles.voteCount}>
                        <p>{post.DownVotesCount}</p>
                        <ThumbDownAltOutlinedIcon fontSize="small" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PostCard;

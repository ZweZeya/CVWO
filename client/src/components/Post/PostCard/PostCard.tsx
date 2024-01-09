import styles from "./PostCard.module.scss";
import { Post } from "../../../types";
import TagBox from "../../TagBox/TagBox";
import PostUser from "../PostUser/PostUser";
import { Box } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
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

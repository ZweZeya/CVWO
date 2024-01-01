import styles from "./PostCard.module.scss";
import { Post } from "../../types";
import { Box } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";

const formatDate = (date: Date): string => {
    const diffInMilli = Math.round(Date.now() - date.getTime());
    const diffInSeconds = Math.round(diffInMilli / 1000);
    const diffInMinutes = Math.round(diffInMilli / (1000 * 60));
    const diffInHours = Math.round(diffInMilli / (1000 * 60 * 60));
    const diffInDays = Math.round(diffInMilli / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 7));
    const diffInMonths = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 30));
    const diffInYears = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 365));

    if (diffInSeconds < 60) {
        return diffInSeconds + " second" + (diffInSeconds == 1 ? "" : "s");
    } else if (diffInMinutes < 60) {
        return diffInMinutes + " minute" + (diffInMinutes == 1 ? "" : "s");
    } else if (diffInHours < 24) {
        return diffInHours + " minute" + (diffInHours == 1 ? "" : "s");
    } else if (diffInDays < 7) {
        return diffInDays + " day" + (diffInDays == 1 ? "" : "s");
    } else if (diffInWeeks < 4) {
        return diffInWeeks + " week" + (diffInWeeks == 1 ? "" : "s");
    } else if (diffInMonths < 12) {
        return diffInMonths + " month" + (diffInMonths == 1 ? "" : "s");
    } else {
        return diffInYears + "year" + (diffInYears == 1 ? "" : "s");
    }
};

const TagBox = ({ tagId, tagName, className }: { tagId: number; tagName: string; className: string }) => {
    const colors: string[] = [
        "#001219",
        "#005f73",
        "#0a9396",
        "#94d2bd",
        "#e9d8a6",
        "#ee9b00",
        "#ca6702",
        "#bb3e03",
        "#ae2012",
        "#9b2226",
    ];
    return (
        <Box className={className} style={{ color: colors[tagId - 1], border: `1.5px solid ${colors[tagId - 1]}` }}>
            {tagName}
        </Box>
    );
};

const PostCard = ({ post }: { post: Post }) => {
    return (
        <Box className={styles.container} onClick={() => console.log(post)}>
            <p className={styles.title}>{post.Title}</p>
            <Box className={styles.midBar}>
                <Box className={styles.user}>
                    <AccountBoxIcon sx={{ fontSize: "80px", color: "#ced4da" }} />
                    <Box className={styles.userDetail}>
                        <Box className={styles.username}>{post.Username}</Box>
                        <Box className={styles.createdAt}>
                            {"posted " + formatDate(new Date(post.CreatedAt)) + " ago"}
                        </Box>
                    </Box>
                </Box>
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

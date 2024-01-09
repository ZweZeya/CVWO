import styles from "./PostUser.module.scss";
import { formatDate } from "../../../utils";
import { Post } from "../../../types";
import { Box } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";

const PostUser = ({ post }: { post: Post }) => {
    return (
        <Box className={styles.user}>
            <AccountBoxIcon sx={{ fontSize: "80px", color: "#ced4da" }} />
            <Box className={styles.userDetail}>
                <Box className={styles.username}>{post.Username}</Box>
                <Box className={styles.createdAt}>{"posted " + formatDate(new Date(post.CreatedAt)) + " ago"}</Box>
            </Box>
        </Box>
    );
};

export default PostUser;

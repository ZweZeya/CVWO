import styles from "./CommentUser.module.scss";
import { Comment } from "../../../types";
import { formatDate } from "../../../utils";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Box } from "@mui/material";
import React from "react";

const CommentUser = ({ comment }: { comment: Comment }) => {
    return (
        <Box className={styles.user}>
            <AccountBoxIcon sx={{ fontSize: "40px", color: "#ced4da" }} />
            <Box className={styles.userDetail}>
                <p className={styles.username}>{comment.Username}</p>
                <p className={styles.createdAt}>{"posted " + formatDate(new Date(comment.CreatedAt)) + " ago"}</p>
            </Box>
        </Box>
    );
};

export default CommentUser;

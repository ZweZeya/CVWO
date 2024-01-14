import styles from "./CommentCard.module.scss";
import { Comment } from "../../../types";
import CommentUser from "../CommentUser/CommentUser";
import { Box } from "@mui/material";
import React from "react";

const CommentCard = ({ comment }: { comment: Comment }) => {
    return (
        <Box className={styles.container}>
            <CommentUser comment={comment} />
            <p className={styles.content}>{comment.Content}</p>
        </Box>
    );
};

export default CommentCard;

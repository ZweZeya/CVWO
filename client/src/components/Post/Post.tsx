import { Post } from "../../types";
import { Box } from "@mui/material";
import React from "react";

const PostCard = ({ post }: { post: Post }) => {
    console.log(post);
    return (
        <Box>
            {post.Title}
            {/* {post.Content} */}
            <Box></Box>
        </Box>
    );
};

export default PostCard;

import { Box } from "@mui/material";
import React from "react";

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

export default TagBox;

import styles from "./Logo.module.scss";
import { Box } from "@mui/material";
import React from "react";

const Logo = ({ style }: { style?: React.CSSProperties }) => {
    return (
        <Box className={styles.container} style={style}>
            <img src="../../../images/palm-tree.png" alt="logo" width="65" />
            <h3>BanterBay</h3>
        </Box>
    );
};

export default Logo;

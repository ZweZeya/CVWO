import styles from "./Logo.module.scss";
import { Box } from "@mui/material";
import React from "react";

const Logo = ({ style, scale }: { style?: React.CSSProperties; scale: number }) => {
    const logoWidth = (65 * scale).toString();
    const logoFontSize = (1.17 * scale).toString() + "em";

    return (
        <Box className={styles.container} style={style}>
            <img src="../../../images/palm-tree.png" alt="logo" width={logoWidth} />
            <h3 style={{ fontSize: logoFontSize }}>BanterBay</h3>
        </Box>
    );
};

export default Logo;

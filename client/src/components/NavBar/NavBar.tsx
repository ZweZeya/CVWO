import styles from "./NavBar.module.scss";
import Logo from "../Logo/Logo";
import { instance } from "../../config/axios.config";
import { Box, InputBase, Popover } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Search = () => {
    return (
        <Box className={styles.searchContainer}>
            <InputBase placeholder="Search" />
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
        </Box>
    );
};

const AccountButton = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleLogout = async () => {
        await instance.get("/auth/logout");
        setTimeout(() => navigate("/login"), 2000);
    };

    return (
        <React.Fragment>
            <button className={styles.accountButton} onClick={handleClick}>
                <AccountCircleOutlinedIcon className={styles.accountIcon} fontSize="large" />
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <button onClick={handleLogout}>Logout</button>
            </Popover>
        </React.Fragment>
    );
};

const NavBar = () => {
    return (
        <Box className={styles.container}>
            <Logo scale={0.7} />
            <Box className={styles.navItems}>
                <Search />
                <AccountButton />
            </Box>
        </Box>
    );
};

export default NavBar;

import styles from "./NavBar.module.scss";
import Logo from "../Logo/Logo";
import { instance } from "../../config/axios.config";
import { Box, InputBase } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import React from "react";

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

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await instance.get("/auth/logout");
        setTimeout(() => navigate("/login"), 2000);
    };

    return (
        <React.Fragment>
            <button className={styles.logoutButton} onClick={handleLogout}>
                <LogoutIcon className={styles.logoutIcon} fontSize="medium" />
            </button>
        </React.Fragment>
    );
};

const NavBar = () => {
    return (
        <Box className={styles.container}>
            <Logo scale={0.7} />
            <Box className={styles.navItems}>
                <Search />
                <LogoutButton />
            </Box>
        </Box>
    );
};

export default NavBar;

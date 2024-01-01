import styles from "./NavBar.module.scss";
import Logo from "../Logo/Logo";
import { instance } from "../../config/axios.config";
import { Box, InputBase } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
// eslint-disable-next-line import/named
import { useNavigate, NavigateFunction } from "react-router-dom";
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

const LogoutButton = ({ navigate }: { navigate: NavigateFunction }) => {
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
    const navigate = useNavigate();

    return (
        <Box className={styles.container}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <Logo scale={0.7} />
            </div>
            <Box className={styles.navItems}>
                <Search />
                <LogoutButton navigate={navigate} />
            </Box>
        </Box>
    );
};

export default NavBar;

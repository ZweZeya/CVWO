import styles from "./AuthPage.module.scss";
import Page from "../../layouts/Page/Page";
import Logo from "../../components/Logo/Logo";
import React from "react";
import { Grid, Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const AuthPage = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <Page style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ced4da" }}>
            <Box className={styles.container}>
                <Grid container className={styles.gridContainer}>
                    <Grid item xs={6} className={styles.gridItem}>
                        <Box className={styles.leftGridItem}>
                            <img src="../../../images/sunset-.png" alt="sunset" width="300" />
                            <TypeAnimation
                                sequence={[
                                    "Welcome to BanterBay",
                                    1000,
                                    "Sunshine, Sea Breeze, and Conversations Galore",
                                    1000,
                                    "Your Coastal Haven for Chats",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={40}
                                className={styles.textAnimation}
                                repeat={Infinity}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} className={styles.gridItem}>
                        <Box className={styles.rightGridItem}>
                            <Logo style={{ marginBottom: "2rem" }} scale={1} />
                            <h2 className={styles.formTitle}>{title}</h2>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Page>
    );
};

export default AuthPage;

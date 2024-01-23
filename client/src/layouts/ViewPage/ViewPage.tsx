import styles from "./ViewPage.module.scss";
import Page from "../Page/Page";
import NavBar from "../../components/NavBar/NavBar";
import { Box, Grid } from "@mui/material";
import React, { ReactNode } from "react";

const ViewPage = ({ left, children, right }: { left?: ReactNode; children: ReactNode; right?: ReactNode }) => {
    return (
        <Page>
            <NavBar />
            <Box className={styles.body}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        {left}
                    </Grid>
                    <Grid item xs={7}>
                        {children}
                    </Grid>
                    <Grid item xs={3}>
                        {right}
                    </Grid>
                </Grid>
            </Box>
        </Page>
    );
};

export default ViewPage;

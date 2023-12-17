import styles from "./Login.module.scss";
import { instance } from "../../config/axios.config";
import Page from "../../layouts/Page/Page";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Grid, Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useFormik } from "formik";
import * as yup from "yup";

const loginValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (value) => {
            await instance.post("/auth/login", value);
            return navigate("/");
        },
    });

    return (
        <Page style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ced4da" }}>
            <Box className={styles.container}>
                <Grid container className={styles.gridContainer}>
                    <Grid item xs={6} className={styles.gridItem}>
                        <Box className={styles.leftGridItem}>
                            <img src="../../../images/sunset-.png" alt="logo" width="300" />
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
                            <Logo style={{ marginBottom: "2rem" }} />
                            <h2 className={styles.formTitle}>Login Account</h2>
                            <form onSubmit={formik.handleSubmit} className={styles.loginContainer}>
                                <TextField
                                    id="username"
                                    name="username"
                                    label="Username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                                <TextField
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <p className={styles.forgotPasswordText}>Forgot password</p>
                                <Button type="submit">Login</Button>
                                <p className={styles.registerText}>New to BanterBay? Register here</p>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Page>
    );
};

export default LoginPage;

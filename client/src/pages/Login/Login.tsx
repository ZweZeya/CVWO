import styles from "./Login.module.scss";
import { instance } from "../../config/axios.config";
import AuthPage from "../../layouts/AuthPage/AuthPage";
import CustomButton from "../../components/Custom/CustomButton/CustomButton";
import CustomTextField from "../../components/Custom/CustomTextField/CustomeTextField";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const loginValidationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {
    const [isSubmitting, setSubmitting] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (value) => {
            try {
                setSubmitting(true);
                setError(false);
                await instance.post("/auth/login", value);
                return navigate("/");
            } catch {
                setSubmitting(false);
                setError(true);
                formik.resetForm();
            }
        },
    });

    return (
        <AuthPage title="Account Login">
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                {isError && <p className={styles.errorBox}>username or password is incorrect</p>}
                <CustomTextField
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <CustomTextField
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
                <CustomButton type="submit">
                    {isSubmitting ? <CircularProgress size={25} sx={{ color: "#ffffff" }} /> : "Login"}
                </CustomButton>
                <Link to="/register" className={styles.registerText}>
                    New to BanterBay? Register here
                </Link>
            </form>
        </AuthPage>
    );
};

export default LoginPage;

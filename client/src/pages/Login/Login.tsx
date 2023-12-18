import styles from "./Login.module.scss";
import { instance } from "../../config/axios.config";
import AuthPage from "../../layouts/AuthPage/AuthPage";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
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
        <AuthPage title="Account Login">
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
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
                <Link to="/register" className={styles.registerText}>
                    New to BanterBay? Register here
                </Link>
            </form>
        </AuthPage>
    );
};

export default LoginPage;

import styles from "./Register.module.scss";
import { instance } from "../../config/axios.config";
import AuthPage from "../../layouts/AuthPage/AuthPage";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import { string, object, ref } from "yup";

const registerValidationSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string().email("Please provide a valid email").required("Email is required"),
    username: string().required("Username is required"),
    password: string().required("Password is required"),
    confirmPassword: string()
        .required("Please confirm password")
        .oneOf([ref("password")], "Passwords do not match"),
});

const RegisterPage: React.FC = () => {
    const [isSubmitting, setSubmitting] = useState<boolean>(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (value) => {
            setSubmitting(true);
            const { firstName, lastName, email, username, password } = value;
            await instance.post("/auth/register", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password,
            });
            return navigate("/login");
        },
    });

    return (
        <AuthPage title="Register">
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <Box className={styles.inputHozizontalContainer}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Box>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
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
                <Box className={styles.inputHozizontalContainer}>
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
                    <TextField
                        type="confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Box>
                <Button type="submit">
                    {isSubmitting ? <CircularProgress size={25} sx={{ color: "#ffffff" }} /> : "Register"}
                </Button>
                <Link to="/login" className={styles.loginText}>
                    Already registered? Login here
                </Link>
            </form>
        </AuthPage>
    );
};

export default RegisterPage;

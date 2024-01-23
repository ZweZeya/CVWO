import styles from "./CommentForm.module.scss";
import CustomTextField from "../../Custom/CustomTextField/CustomeTextField";
import CustomButton from "../../Custom/CustomButton/CustomButton";
import { instance } from "../../../config/axios.config";
import { Post } from "../../../types";
import { Box, FormControl, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { string, object, number } from "yup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const createCommentSchema = object({
    content: string().required("Content is required"),
    postId: number(),
});

const CommentForm = ({ post }: { post: Post }) => {
    const [isSubmitting, setSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            content: "",
            postId: post.ID,
        },
        validationSchema: createCommentSchema,
        onSubmit: async (value) => {
            setSubmitting(true);
            await instance.post("/comment", value);
            setTimeout(() => navigate(0), 2000);
        },
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <FormControl>
                    <CustomTextField
                        id="content"
                        name="content"
                        label="Comment"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.content && Boolean(formik.errors.content)}
                        helperText={formik.touched.content && formik.errors.content}
                        multiline
                        rows={3}
                    />
                </FormControl>
                <CustomButton type="submit">
                    {isSubmitting ? <CircularProgress size={25} sx={{ color: "#ffffff" }} /> : "Upload"}
                </CustomButton>
            </form>
        </Box>
    );
};

export default CommentForm;

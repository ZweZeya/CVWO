import styles from "./Create.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Page from "../../layouts/Page/Page";
import CustomTextField from "../../components/CustomTextField/CustomeTextField";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useTags } from "../../hooks";
import { instance } from "../../config/axios.config";
import { Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useFormik } from "formik";
import { string, object, number } from "yup";
import React, { FC } from "react";

const createPostSchema = object({
    title: string().required("Title is required"),
    content: string().required("Content is required"),
    tagId: number().required("Tag is required"),
});

const CreatePostPage: FC = () => {
    const tags = useTags();

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            tagId: "",
        },
        validationSchema: createPostSchema,
        onSubmit: async (value) => {
            await instance.post("/post", value);
        },
    });

    return (
        <Page>
            <NavBar />
            <Box className={styles.formContainer}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <p className={styles.formTitle}>New Post</p>
                    <FormControl>
                        <InputLabel>Tag</InputLabel>
                        <Select
                            id="tagId"
                            name="tagId"
                            label="Tag"
                            value={formik.values.tagId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.tagId && Boolean(formik.errors.tagId)}
                        >
                            {tags.map((t) => (
                                <MenuItem key={t.ID} value={t.ID}>
                                    {t.Name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <CustomTextField
                        id="title"
                        name="title"
                        label="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <CustomTextField
                        id="content"
                        name="content"
                        label="Content"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.content && Boolean(formik.errors.content)}
                        helperText={formik.touched.content && formik.errors.content}
                        multiline
                        rows={6}
                    />
                    <CustomButton type="submit">Create</CustomButton>
                </form>
            </Box>
        </Page>
    );
};

export default CreatePostPage;

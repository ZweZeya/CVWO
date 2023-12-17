// eslint-disable-next-line import/named
import TextField, { TextFieldProps } from "@mui/material/TextField";
// eslint-disable-next-line import/named
import { createTheme, ThemeProvider, Theme, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import React from "react";

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "--TextField-brandBorderColor": "#E0E3E7",
                        "--TextField-brandBorderHoverColor": "#007ea7",
                        "--TextField-brandBorderFocusedColor": "#007ea7",
                        "& label.Mui-focused": {
                            color: "var(--TextField-brandBorderFocusedColor)",
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: "var(--TextField-brandBorderColor)",
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "var(--TextField-brandBorderHoverColor)",
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: "var(--TextField-brandBorderFocusedColor)",
                        },
                    },
                },
            },
        },
    });

const CustomTextField = (props: TextFieldProps) => {
    const outerTheme = useTheme();

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField {...props} />
        </ThemeProvider>
    );
};

export default CustomTextField;

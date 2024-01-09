import { styled } from "@mui/material/styles";
// eslint-disable-next-line import/named
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton = styled(Button)<ButtonProps>(() => ({
    color: "#ffffff",
    backgroundColor: "#007ea7",
    "&:hover": {
        backgroundColor: "#05668d",
    },
}));

export default CustomButton;

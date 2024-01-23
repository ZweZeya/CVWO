import Home from "./pages/Home/Home";
import CreatePostPage from "./pages/Create/Create";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import PostPage from "./pages/Post/Post";
import Error404Page from "./pages/Error/Error404";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<CreatePostPage />} />
                        <Route path="/post/:id" element={<PostPage />} />
                        <Route path="*" element={<Error404Page />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;

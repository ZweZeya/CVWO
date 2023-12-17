import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import AnonymousRoute from "./auth/AnonymousRoute";
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
                        <Route element={<AnonymousRoute />}>
                            <Route path="/login" element={<LoginPage />} />
                        </Route>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;

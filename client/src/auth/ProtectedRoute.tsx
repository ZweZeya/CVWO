import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = () => {
    const user = useSelector((state: RootState) => state.user);
    const location = useLocation();

    return user.isAuthenticated ? <Outlet /> : <Navigate to="login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

import { useCurrentUser } from "../hooks";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = () => {
    const { isAuthenticated } = useCurrentUser();
    const location = useLocation();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

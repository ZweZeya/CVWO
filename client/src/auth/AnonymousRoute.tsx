import { useCurrentUser } from "../hooks";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import React from "react";

const AnonymousRoute = () => {
    const { isAuthenticated } = useCurrentUser();
    const location = useLocation();

    return isAuthenticated ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />;
};

export default AnonymousRoute;

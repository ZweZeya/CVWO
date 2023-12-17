import { useUser } from "../hooks/useUser";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import React from "react";

const AnonymousRoute = () => {
    const location = useLocation();
    const { data } = useUser();

    return data ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />;
};

export default AnonymousRoute;

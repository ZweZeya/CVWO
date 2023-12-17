import { RootState } from "../state/store";
import { useUser } from "../hooks/useUser";
import { login } from "../state/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import React, { useEffect } from "react";

const ProtectedRoute = () => {
    const userState = useSelector((state: RootState) => state.user);
    const location = useLocation();
    const dispatch = useDispatch();
    const { data } = useUser();

    useEffect(() => {
        if (data) {
            dispatch(login(data));
        }
    }, [data]);

    return userState.user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

// import {Login} from "pages/Login";
import {Route, RouteProps, Routes} from "react-router-dom";
import React from "react";

export const PublicRoute = ({children, ...props}: RouteProps) => {
    return (
        <Routes>
            <Route
                path={'*'}
                // element={<Login/>}
                {...props}
            />
        </Routes>
    );
};
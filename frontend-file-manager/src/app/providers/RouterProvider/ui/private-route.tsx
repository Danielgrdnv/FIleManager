import {Route, RouteProps, Navigate, Routes} from 'react-router-dom';
import React from "react";
// import {useCheckAuth} from "shared/model/Authorization";
import {ROUTES} from "shared/config/router/config";

export const PrivateRoutes = ({children, ...props}: RouteProps) => {
    // const isAuth = useCheckAuth();
    const isAuth = true;

    return (
        <Routes>
            {ROUTES.map((item) =>
                <React.Fragment key={`route-${item.langKey}`}>
                    <Route
                        {...props}
                        path={item.to}
                        element={
                            isAuth
                                ? item.component
                                : <Navigate to={'/login'} state={{from: location}} replace/>
                        }
                    />
                </React.Fragment>
            )}
        </Routes>
    )
};
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './api/auth/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { isLoggedIn } = useAuth(); // 로그인 상태

    return (
        <Route
            {...rest}
            element={
                isLoggedIn ? (
                    <Component {...rest} />
                ) : (
                    <Navigate to="/login" replace />
                )
            }
        />
    );
};

export default PrivateRoute;

import React from 'react';
import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const OrganizationRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center" style={{ height: '80vh' }}>
                <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
            </div>
        )
    }
    if (user.email && user.role_id === 2) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default OrganizationRoute;
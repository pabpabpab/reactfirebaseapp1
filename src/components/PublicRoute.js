import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from '../redux/selectors';

const PublicRoute = ({ children }) => {
    const user = useSelector(getUser);
    if (user) {
        return <Navigate to="/" replace />
    }
    return children;
};

export default PublicRoute;
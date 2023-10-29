import React, { useEffect } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const auth = useAuth();
    const location = useLocation();

    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.isLogedin()){
            navigate('/login', {state: {path: location.pathname}})
        }
    
    })
    
    return children
}

export default RequireAuth
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='h-screen'><div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-auto" style={{"--value":70}}></div></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login"></Navigate>
    
};

export default PrivateRoute;
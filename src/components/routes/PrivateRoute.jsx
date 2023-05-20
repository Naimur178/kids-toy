import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex flex-col items-center justify-center mx-auto my-36'> <progress className="progress w-56 "></progress></div>;
    }

    if(user)
    {
        return children;
    }
    return <Navigate state={{from: location}} to= '/login' replace></Navigate> ;
};

export default PrivateRoute;
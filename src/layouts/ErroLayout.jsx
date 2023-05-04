import React from 'react';
import ErrorPAge from '../pages/ErrorPage/ErrorPAge';
import { Outlet } from 'react-router-dom';

const ErroLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default ErroLayout;
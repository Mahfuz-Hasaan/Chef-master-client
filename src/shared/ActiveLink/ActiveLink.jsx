import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-yellow-300 border-2 rounded-lg p-2 "
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;
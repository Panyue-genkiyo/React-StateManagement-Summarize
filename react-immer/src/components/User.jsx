import React from 'react';
import { useTheme } from "../hooks/useTheme";
import './user.css';
const User = () => {
    const { getTheme, toggleTheme } = useTheme();
    return (
        <div className={`container  ${getTheme() ? 'darken': 'not_darken'}`}>
            <h1>User</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default User;

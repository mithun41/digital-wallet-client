import React, { useEffect, useState } from 'react';

const Theme = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark')

    useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

    return (
        <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'dark' : 'Light'}
        </div>
    );
};

export default Theme;
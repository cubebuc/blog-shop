import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function DarkMode()
{
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

    useEffect(() =>
    {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <DarkModeSwitch checked={darkMode} onChange={setDarkMode} size={24} />
    );
}

export default DarkMode;
import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, toggle] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    toggle();
  };
  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

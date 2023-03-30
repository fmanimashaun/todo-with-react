import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showLinks && ref.current && !ref.current.contains(e.target)) {
        setShowLinks(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);
  return (
    <>
      <nav ref={ref} className="navbar">
        <button
          type="button"
          className="toggle"
          onClick={() => setShowLinks((prev) => !prev)}
        >
          {showLinks ? 'close' : 'open'}
        </button>
        <ul className={`menu-nav${showLinks ? ' show-menu' : ''}`}>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path} onClick={() => setShowLinks(false)}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

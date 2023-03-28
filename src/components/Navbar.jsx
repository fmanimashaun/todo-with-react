import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('click', handleClick);
    };
  }, [dropdown]);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            Services
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

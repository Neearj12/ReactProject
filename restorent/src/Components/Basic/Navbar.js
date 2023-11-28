import React from 'react';

const Navbar = ({ FilterItem, menulist }) => {
  return (
    <>
      <nav className='navbar'>
        <div className="btn-group">
          {menulist.map((item, index) => (
            <button
              key={index}
              className="btn-group__item"
              onClick={() => FilterItem(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

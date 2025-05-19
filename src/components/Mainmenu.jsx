import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
}; 

return (
    <div>
      <button onClick={toggleMenu} style={{ fontSize: '24px', cursor: 'pointer' }}>
      <FaBars className='lg:hidden max-lg:hidden max-sm:block' size={20} color="white" />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '45px',
          right: '0px',
          background: 'black',
          boxShadow: '0 4px 8px rgba(128, 128, 128, 0.1)',
          padding: '10px',
          width: '200px',
          borderRadius: '8px',
          zIndex: 1,
          border: '1px solid #333',
          transition: 'all 0.3s ease-in-out',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0,color: 'gray',hover: {color: 'white'}, transition: 'all 0.3s ease-in-out'}}>
            <li><a href="Store">Store</a></li>
            <li><a href="Mac">Mac</a></li>
            <li><a href="iPhone">iPhone</a></li>
            <li><a href="Support">Support</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

    export default Menu;
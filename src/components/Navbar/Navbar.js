import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
              <span className='logo'>RAHATDEV</span>
              <div className='navbar-items'>
                <button>Register</button>
                <button>Login</button>
              </div>
            </div>
            
        </div>
    );
};

export default Navbar;
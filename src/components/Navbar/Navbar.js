import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className='navbar'>
            <div className='navbar-container'>
              <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
              <span className='logo'>RAHATDEV</span>
              </Link>
              {
                user ? user.name:(
                  <div className='navbar-items'>
                
                  <button className='navbutton'>Register</button>
                  <button className='navbutton'>Login</button>
                </div>
                )
              }
            
            </div>
            
        </div>
    );
};

export default Navbar;
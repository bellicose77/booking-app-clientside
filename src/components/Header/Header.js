import React from 'react';
import {
    faBed,
  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div>
           <div>
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>
        </div>
    );
};

export default Header;
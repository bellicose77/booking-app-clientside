import React from 'react';
import {
    faBed, faCarSide, faPaperPlane, faPlane,
  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div>
           <div>
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>
           <div>
           <FontAwesomeIcon icon={faPlane} />
           <span>Flights</span>
           </div>
           <div>
           <FontAwesomeIcon icon={faCarSide} />
           <span>Cars</span>
           </div>
           <div>
           <FontAwesomeIcon icon={faPaperPlane} />
           <span>Attraction</span>
           </div>
        </div>
    );
};

export default Header;
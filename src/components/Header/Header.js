import React from 'react';
import './Header.css';
import {
    faBed, faCarSide, faPaperPlane, faPlane, faTaxi,
  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
    <div className='header'>
        <div className='headerList'>
              <div className='headerListItem'>
                 <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
              </div>
              <div className='headerListItem'>
                 <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
              </div>
              <div className='headerListItem'>
                 <FontAwesomeIcon icon={faCarSide} />
                  <span>Cars</span>
              </div>
              <div className='headerListItem'>
                 <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Attractions</span>
              </div>
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
           <div>
           <FontAwesomeIcon icon={faTaxi} />
           <span>Taxi</span>
           </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import {
    faBed, faCalendar, faCalendarDays, faCarSide, faPaperPlane, faPerson, faPlane, faTaxi,
  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
    <div className='header'>
        <div className='headerContainer'>
        <div className='headerList'>
              <div className='headerListItem active'>
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
              <div className='headerListItem'>
                 <FontAwesomeIcon icon={faTaxi} />
                  <span>Taxi</span>
              </div>
        </div>
        <h1 className='headerTitle'>A lifetime of discounts?It's genius.</h1>
        <p className='headerDesc'>
        Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Rahatbooking account
        </p>
        <button className='headerBtn'>Sign / Register</button>
        <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type="text"
             placeholder="where are you going?"
             className='headerSearchItem'
             />
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span className='headerSearchText'>date to date</span>
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span className='headerSearchItem'>2 adults 1 children 1 rooms</span>
            </div>
        </div>
        </div>
       
    </div>
    );
};

export default Header;
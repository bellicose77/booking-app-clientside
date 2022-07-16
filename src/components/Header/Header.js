import React, { useState } from 'react';
import './Header.css';
import {
    faBed, faCalendar, faCalendarDays, faCarSide, faPaperPlane, faPerson, faPlane, faTaxi,
  
  } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from 'date-fns';

const Header = () => {
    const [openDate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
      })
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
             className='headerSearchInput'
             />
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"dd//MM/yy")} to ${format(date[0].endDate,"dd//MM/yy")}`}</span>
            {
                openDate && 
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
            }
            
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span className='headerSearchText'>2 adults 1 children 1 rooms</span>
            </div>
            <div className='headerSearchItem'>
               <button>Search</button>
            </div>
        </div>
        </div>
       
    </div>
    );
};

export default Header;
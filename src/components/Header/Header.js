import React, { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Header.css';
import {
    faBed, faCalendar, faCalendarDays, faCarSide, faPaperPlane, faPerson, faPlane, faTaxi,
  
  } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from 'date-fns';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Header = ({type}) => {
    const [openDate,setOpenDate]=useState(false);
    const [description,setDescription] = useState('');
    const navigate = useNavigate();
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[openOption,setOpenOption] = useState(false)
      const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
      });
      const {user} = useContext(AuthContext)
      const handleOption = (name,operation)=>{
        setOptions(prev=>{
            return {
                ...prev,[name]:operation==="i" ? options[name]+1: options[name]-1 
            }
        })
      };
      const{dispatch} = useContext(SearchContext);
      const handleSearch = () =>{
        dispatch({type: "NEW_SEARCH", payload: { description, dates, options }})
        navigate("/hotels",{state:{description,dates,options}});
      }
    return (
    <div className='header'>
        <div className={type==="list" ? "headerContainer mode" : "headerContainer"}>
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
        {
          type!=="list" && 
          <>
          {!user && <button className='headerBtn'>Sign / Register</button>
        }
        
          
          
           <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type="text"
             onChange={(e)=>setDescription(e.target.value)}
             placeholder="where are you going?"
             className='headerSearchInput'
             />
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate,"dd//MM/yy")} to ${format(dates[0].endDate,"dd//MM/yy")}`}</span>
            {
                openDate && 
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                />
            }
            
            </div>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children. ${options.room} rooms `}</span>
            {
              openOption &&  <div className='options'>
              <div className='optionsItem'>
                  <span className='optionsText'>Adult</span>
                  <div className='optionsCouter' >
                    <button disabled={options.adult <=1}
                    className='optionCouterButton'
                     onClick={()=>handleOption("adult","d")}>-</button>
                    <span className='optionCouterNumber'>{options.adult}</span>
                    <button className='optionCouterButton' onClick={()=>handleOption("adult","i")}>+</button>
                  </div>
              </div>
              <div className='optionsItem'>
                  <span className='optionsText'>children</span>
                  <div className='optionsCouter' >
                    <button 
                     disabled={options.children <=1}
                    className='optionCouterButton'
                     onClick={()=>handleOption("children","d")}
                     >-</button>
                    <span className='optionCouterNumber'>{options.children}</span>
                    <button className='optionCouterButton' onClick={()=>handleOption("children","i")}>+</button>
                  </div>
              </div>
              <div className='optionsItem'>
                  <span className='optionsText'>Room</span>
                  <div className='optionsCouter' >
                    <button 
                    disabled={options.room<=1}
                    className='optionCouterButton' 
                    onClick={()=>handleOption("room","d")}
                    >-
                    </button>
                    <span className='optionCouterNumber'>{options.room}</span>
                    <button className='optionCouterButton' onClick={()=>handleOption("room","i")}>+</button>
                  </div>
              </div>
          </div> 
            }
            
            </div>
            <div onClick={handleSearch} className='headerSearchItem'>
               <button>Search</button>
            </div>
        </div>
          </>
        }
       
        </div>
       
    </div>
    );
};

export default Header;
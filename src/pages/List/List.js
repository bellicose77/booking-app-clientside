import React, { useState } from 'react';
import './List.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
    const location = useLocation();
    const [description,setDescription] = useState(location.state.description)
    const [date,setDate] = useState(location.state.date);
    const [options,setOptions] = useState(location.state.options);
    const [openDate,setOpenDate]=useState(false);
    const {data,loading,error,reFetch} =useFetch(`http://localhost:8000/api/hotel?city=${destination}`) 
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='listContainer'>
              <div className='listWrapper'>
                <  div className='searchList' >
                    <h1 className='searchTitle'>
                        Search
                    </h1>
                    <div className='lsitem'>
                        <label>Description</label>
                        <input type="text" placeholder={description}/>
                    </div>
                    <div className='lsitem'>
                        <label>Check-in Date</label>
                        <span onClick={e=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"dd//MM/yy")}
                         to ${format(date[0].endDate,"dd//MM/yy")}`}</span>
                         {
                            openDate &&  <DateRange
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                   />
                         }
                       
                        
                    </div>
                    <div className='lsitem'>
                        <label>option</label>
                        <div className='lsOption'>
                            <div className='lsOptionItem'>
                               <label>
                               Min price <small>per night</small>
                                </label> 
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className='lsOptionItem'>
                               <label>
                               Max price <small>per night</small>
                                </label> 
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className='lsOptionItem'>
                               <label>
                               <span className="lsOptionText">Adult</span>
                                </label> 
                                <input min={1} type="number" className="lsOptionInput" placeholder={options.adult} />
                            </div>
                            <div className='lsOptionItem'>
                               <label>
                               <span className="lsOptionText">Children</span>
                                </label> 
                                <input min={0} type="number" className="lsOptionInput" placeholder={options.children} />
                            </div>
                            <div className='lsOptionItem'>
                               <label>
                               <span className="lsOptionText">Room</span>
                                </label> 
                                <input min={1} type="number" className="lsOptionInput" placeholder={options.room} />
                            </div>
                        </div>
                    <button className='buttonS'>Search</button>
                    </div>
                </div>
                <div className='searchResult'>
                   <SearchItem/>
                </div>
                
              </div>
             
            </div>
          
        </div>
    );
};

export default List;
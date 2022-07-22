import React, { useState } from 'react';
import './List.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const List = () => {
    const location = useLocation();
    const [description,setDescription] = useState(location.state.description)

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='listContainer'>
              <div className='listWrapper'>
                <div className='searchList' >
                    <h1 className='searchTitle'>
                        Search
                    </h1>
                    <div className='lsitem'>
                        <label>Description</label>
                        <input type="text" placeholder={description}/>
                    </div>
                    <div className='lsitem'>
                        <label></label>
                        <input type="text" placeholder="destination"/>
                    </div>
                </div>
                <div className='searchResult'>
                    <h1>Result</h1>
                </div>
              </div>
            </div>
        </div>
    );
};

export default List;
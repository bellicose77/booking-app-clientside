import React from 'react';
import './List.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const List = () => {
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
                        <input type="text" placeholder="destination"/>
                    </div>
                    <div className='lsitem'>
                        <label>Description</label>
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
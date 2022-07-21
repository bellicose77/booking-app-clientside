import React from 'react';
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
                    <h1 className='searchTitle'></h1>
                </div>
                <div className='searchResult'>

                </div>
              </div>
            </div>
        </div>
    );
};

export default List;
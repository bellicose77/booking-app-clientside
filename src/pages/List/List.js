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
                <div className='SearchList' >
                    
                </div>
                <div>
                    
                </div>
              </div>
            </div>
        </div>
    );
};

export default List;
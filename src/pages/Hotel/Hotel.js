import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Hotel = () => {
    return (
        <div>
           <Navbar/>
           <Header type="list"/>
           <div className='hotelContainer'>
            
           </div>
        </div>
    );
};

export default Hotel;
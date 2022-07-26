import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Hotel = () => {
    return (
        <div>
           <Navbar/>
           <Header type="list"/>
           <div className='hotelContainer'>
            <div className='hotelWrapper'>
                <h1 className="hotelTitle">Tower Street Apartments</h1>
                <div className='hotelAddress'>

                </div>
            </div>
           </div>
        </div>
    );
};

export default Hotel;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
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
                    <FontAwesomeIcon icon={faLocationDot}/>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Hotel;
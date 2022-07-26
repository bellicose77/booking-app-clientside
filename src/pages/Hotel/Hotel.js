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
                    <span>Elton St 125 New york</span>
                </div>
                <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            
          </div>
            </div>
           </div>
        </div>
    );
};

export default Hotel;
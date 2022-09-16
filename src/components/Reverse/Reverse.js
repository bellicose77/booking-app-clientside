import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reverse = ({setOpenSlide,hotelId}) => {
    return (
        <div className='reverse'>
            <div className='rContainer'>
               <FontAwesomeIcon 
               icon={faCircleXmark}
               className='rClose'
               onClick={()=>setOpenSlide(false)}/>
            </div>
            <h2>Reverse</h2>
        </div>
    );
};

export default Reverse;
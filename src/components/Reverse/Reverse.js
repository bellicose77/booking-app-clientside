import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useFetch from '../../hooks/useFetch';

const Reverse = ({setOpenSlide,hotelId}) => {
    const{data,loading,error} = useFetch(`http://localhost:8000/api/hotel/room/${hotelId}`);
    console.log(data)
    return (
        <div className='reverse'>
            <div className='rContainer'>
               <FontAwesomeIcon 
               icon={faCircleXmark}
               className='rClose'
               onClick={()=>setOpenSlide(false)}/>
               <span>Select your rooms:</span>
               {
                data.map((item)=>(
                <div className="rItem" key={item._id}>

                </div>
                ))
               }
            </div>

        </div>
    );
};

export default Reverse;
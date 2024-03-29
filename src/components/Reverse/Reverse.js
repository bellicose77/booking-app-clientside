import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Reverse = ({setOpenSlide,hotelId}) => {
    const [selectedRooms,setSelectedRooms] = useState([])
    const{data,loading,error} = useFetch(`http://localhost:8000/api/hotel/room/${hotelId}`);
    //console.log(data)
    const handleSelect = (e) =>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms( 
            checked ? [...selectedRooms,value]:selectedRooms.filter((item) => item !== value)
            )

    }
    console.log(selectedRooms)
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
                  <div className='rItemInfo'>
                     <div className="rTitle">{item.title}</div>
                     <div className="rDesc">{item.description}</div>
                     <div className="rMax">
                       Max people: <b>{item.maxPeople}</b>
                     </div>
                     <div className="rPrice">{item.price}</div>
                  </div>
                  <div className='rSelectRooms'>
                     {
                        item.roomNumbers.map((roomNumber)=>(
                            <div className='room'>
                                <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    //disabled={!isAvailable(roomNumber)}
                  />
                             </div>
                        ))
                     }
                  </div>
                </div>
                ))
               }
            </div>

        </div>
    );
};

export default Reverse;
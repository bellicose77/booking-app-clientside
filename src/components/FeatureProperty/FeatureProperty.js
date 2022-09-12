import React from 'react';
import useFetch from '../../hooks/useFetch';
import './FeatureProperty.css'

const FeatureProperty = () => {
    const {data,loading,error}=useFetch("http://localhost:8000/api/hotel?featured=true");
    console.log(data)
    return (
        <div className='fp'>
            {
                loading ? ("loading") : (
                    <>
                    {
                        data.map((item)=>(
                            <div className='fpItem' key={item._id}>
                           <img src={item.photos[0]}
                           className='fpImg'/>
                  <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.chepestPrice}</span>
                {
                    item.rating && <div className='fpRating'>
    
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>
                }
                

            </div>
                        ))
                    }
                    </>
                )
            }
          
            
        </div>
    );
};

export default FeatureProperty;
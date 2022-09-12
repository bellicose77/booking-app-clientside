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
                            <div className='fpItem' key={item.id}>
                           <img src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
                           className='fpImg'/>
                  <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.chepestPrice}</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>

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
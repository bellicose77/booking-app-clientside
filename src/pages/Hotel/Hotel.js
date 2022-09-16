import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from 'react';
import './Hotel.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MailList  from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import { parseWithOptions } from 'date-fns/fp';
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const[slideindex,setSlideindex] = useState(0);
  const [openSlide,setOpenSlide] = useState(false);

  const {data,loading,error} = useFetch(`http://localhost:8000/api/hotel/find/${id}`);

  const {dates,options} = useContext(SearchContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  //console.log(dates);
  //console.log(data)

  const handleOpen = (i) =>{
          setSlideindex(i);
          setOpenSlide(true);
          
  }
  const handelArrow= (directions) =>{
    let slideNumber;
    if(directions==='f'){
      slideNumber = slideindex === 5?0:slideindex+1;
    }
    else {
      slideNumber = slideindex === 0?5:slideindex-1;
    }
    setSlideindex(slideNumber);
  }
    return (
        <div>
           <Navbar/>
           <Header type="list"/>
           {
            loading ? ("loading:" ) :(
            <div className='hotelContainer'>
          {
            openSlide && <div className='sliderContainer'>
              <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpenSlide(false)} className='close'/>
              <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>handelArrow('f')} className='arrow'/>
              <div className="sliderWrapper">
              <img src={data.photos[slideindex]} alt="" className="sliderImg" />
              <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>handelArrow('B')} className='arrow'/>
            </div>
            </div>
          }
          
            <div className='hotelWrapper'>
            <button className="bookNow">Reserve or Book Now!</button>
                <h1 className="hotelTitle">{data.name}</h1>
                <div className='hotelAddress'>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>{data.address}</span>
                </div>
                <span className="hotelDistance">
                   {data.distance}
                </span>
               <span className="hotelPriceHighlight">
                   Book a stay over $ {data.chepestPrice} at this property and get a free airport taxi
                </span>
                    <div className="hotelImages">
                      {
                          data.photos?.map((photo,i)=>( 
                    <div className="hotelImgWrapper" >
                        <img src={photo} 
                        onClick={()=>handleOpen(i)} 
                        className='hotelImg'/>
                    </div>
                ))
            }
          </div>
                <div className="hotelDetails">
                   <div className='hotelDetailsTexts'>
                   <h1 className="hotelTitle">{data.name}</h1>
              <p className="hotelDesc">
               {data.description}
              </p>
                   </div>
                   <div className="hotelDetailsPrice">
                   <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data.chepestPrice * options.room}</b> ({days} nights)
              </h2>
              <button onClick={}>Reserve or Book Now!</button>
                   </div>
                 

                  </div>
            </div>
            <MailList/>
            <Footer/>
           </div>
           )}
    </div>
    );
};

export default Hotel;
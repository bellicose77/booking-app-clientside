import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import './Hotel.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MailList  from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const[slideindex,setSlideindex] = useState(0);
  const [openSlide,setOpenSlide] = useState(false);

  const {data,loading,error} = useFetch(`http://localhost:8000/api/hotel/find/${id}`);
  console.log(data)

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
              <img src={photos[slideindex].src} alt="" className="sliderImg" />
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
                          photos.map((photo,i)=>( 
                    <div className="hotelImgWrapper" >
                        <img src={photo.src} onClick={()=>handleOpen(i)} className='hotelImg'/>
                    </div>
                ))
            }
          </div>
                <div className="hotelDetails">
                   <div className='hotelDetailsTexts'>
                   <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
                   </div>
                   <div className="hotelDetailsPrice">
                   <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
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
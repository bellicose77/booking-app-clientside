import React from 'react';
import './SearchItem.css';
const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img src={item.photos[0]}
            className='siImg'
            />
            <div className='siDesc'>
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
          Studio Apartment with Air conditioning
             </span>
        <span className="siFeatures">
          {item.description}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                 <span>Excellent</span>
                 <button>8.9</button>
                  </div>

                  <div className="siDetailTexts">
          <span className="siPrice">$ {item.chepestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
            </div>
        </div>
    );
};

export default SearchItem;
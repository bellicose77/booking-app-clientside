import React from 'react';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featureContainer'>
            <div className='featureItem'>
              <img src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
              alt='noting' className='featureImg'
              />
              <div className='featureText'>
                <h1>Dubli</h1>
                <h2>123 propertis</h2>
              </div>
            </div>
        </div>
    );
};

export default Featured;
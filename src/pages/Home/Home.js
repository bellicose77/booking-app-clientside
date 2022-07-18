import React from 'react';
import Featured from '../../components/Featured/Featured';
import FeatureProperty from '../../components/FeatureProperty/FeatureProperty';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
const Home = () => {
    return (
        <div>
           <Navbar/>
           <Header/>
           <div className='homeContainer'>
               <Featured/>
               <h1 className='homeTitle'>
                Browse by propertis type
               </h1>
               
           </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Featured from '../../components/Featured/Featured';
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
               <h2 className='homeTitle'>
                Browse propertis
               </h2>
           </div>
        </div>
    );
};

export default Home;
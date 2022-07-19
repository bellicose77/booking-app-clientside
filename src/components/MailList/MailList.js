import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='mailTitle'>
            Save time, save money!
            </h1>
            <span>Sign up and we'll send the best deals to you</span>
            <div className='mailContainer'>
                <input type='text' placeholder='Enter mail'/>
                <button>Subscribe</button>
            </div>
            
        </div>
    );
};

export default MailList;
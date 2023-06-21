// src/components/Home.js

import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import AccountBalance from './AccountBalance';
import Debits from './Debits';

const Home = (props) => {
    const [view,setView] = useState(false);

    const openView = () => {
        if(view)
            setView(false);
        else
            setView(true);
    };

    return (
        <div className='home'>

            <div className='logo'>
                <img src="https://freepngimg.com/save/165680-banking-finance-download-free-image/512x512" alt="bank" width="200"/>
                <h1>Bank of React</h1>
            </div>

            <AccountBalance accountBalance={props.accountBalance} />
            
            <div className='link'>
                <Link to="/userProfile">User Profile</Link>
            </div>

            <button onClick={openView}>View Balance Details</button>
          { // only show if view is true
            view && (
            <div>
            <p className='text'><b>Total Debit:</b> $ {(props.debit).toFixed(2)}</p>
            <p className='text'><b>Total Credit:</b> $ {props.credit.toFixed(2)}</p>
            </div>
          )}

        </div>
    );
}

export default Home;
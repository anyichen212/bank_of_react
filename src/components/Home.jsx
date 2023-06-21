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
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            
            <AccountBalance accountBalance={props.accountBalance} />
            
            <button onClick={openView}>Details</button>
          { // only show if view is true
            view && (
            <div>
            <p>Total Debit: $ {(props.debit).toFixed(2)}</p>
            <p>Total Credit: $ {props.credit.toFixed(2)}</p>
            </div>
          )}

        </div>
    );
}

export default Home;
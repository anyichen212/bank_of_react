// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

import AccountBalance from './AccountBalance';

const Home = (props) => {

    return (
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            
            <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    );
}

export default Home;
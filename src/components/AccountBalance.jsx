// src/components/AccountBalance.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AccountBalance = (props) => {
    const [view,setView] = useState(false);
    const [debit, setDebit] = useState(0.0);
    const [credit, setCredit] = useState(0.0);
    const [balance,setBalance] = useState(0.0);
    
    useEffect(() => {
        const d = axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits")
        .then(result => {setDebit(result.data)});

        const c = axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits")
        .then(result => {setCredit(result.data)});

        setBalance(credit-debit);

    }, []);

    const openView = () => {
        if(view)
            setView(false);
        else
            setView(true);
    };



    return (
        <div>
          <p>Balance: ${balance.toFixed(2)}</p>
          <button onClick={openView}>View</button>
          { // only show if view is true
            view && (
            <div>
            <p>Debit: $ {(debit*-1).toFixed(2)}</p>
            <p>Credit: $ {credit.toFixed(2)}</p>
            </div>
          )}
        </div>
    );

}

export default AccountBalance;
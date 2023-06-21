// src/components/AccountBalance.js

import React, { useState} from 'react';


const AccountBalance = (props) => {

    return (
        <div>
          <p>Balance: ${props.accountBalance.toFixed(2)}</p>        
        </div>
    );

}

export default AccountBalance;
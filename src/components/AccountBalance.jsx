// src/components/AccountBalance.js

import React, { useState} from 'react';


const AccountBalance = (props) => {

    return (
        <div className='balance'>
          <p><b>Balance:</b> ${props.accountBalance.toFixed(2)}</p>        
        </div>
    );

}

export default AccountBalance;
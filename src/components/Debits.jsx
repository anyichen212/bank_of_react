import { useState } from 'react';
import React from 'react';
import Cards from './Cards';

import AccountBalance from './AccountBalance';

const Debits = (props) => {
    const[viewBalance,setViewBalance] = useState(false);
    const[value, setValue] = useState(0.0);
    const[description, setDescription] = useState("");

    const openView = () => {
        if(viewBalance)
            setViewBalance(false);
        else
            setViewBalance(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newArr = [];
        newArr[0] = value;
        newArr[1] = description;
        const date = new Date().toLocaleDateString();
        newArr[2] = date;

        props.setDebitList(prev => {return[newArr, ...props.debitList]});
        props.setDebit(props.debit+value);
        console.log(props.debitList);
        
      }

    return (
        <div>
            <h1>Debits</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Value In USD
                    <input 
                    type="number"
                    min="0"
                    step="any"
                    value={value}
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                    />
                </label>
                <br />
                <label>Enter A Description
                    <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>

            <button onClick={openView}>View Balance</button>

          { // only show balance if viewBalance is true
            viewBalance && (
            <div>
                <AccountBalance accountBalance={props.accountBalance} />
            </div>
          )}

            <div className='cards'>{props.debitList.map((debt,index)=>{
                return <Cards key={index} card={debt} />
            })}</div>
            
        </div>
    );
}

export default Debits;
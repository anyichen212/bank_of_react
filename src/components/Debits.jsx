import { useState } from 'react';
import React from 'react';
import Cards from './Cards';

import AccountBalance from './AccountBalance';

const Debits = (props) => {
    const[viewBalance,setViewBalance] = useState(false);
    const[value, setValue] = useState(0.0);
    const[description, setDescription] = useState("");

    //function to Show Account Balance
    const openView = () => {
        if(viewBalance)
            setViewBalance(false);
        else
            setViewBalance(true);
    };

    //when submit is click
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent page from reload

        //create a new array to hold the newly submit values
        const newArr = [];
        newArr[0] = value;
        newArr[1] = description;
        const date = new Date().toLocaleDateString(); ////gets current date
        newArr[2] = date;

        //update Total debit amount and list to display, will also update account balance
        props.setDebitList(prev => {return[newArr, ...props.debitList]});
        props.setDebit(props.debit+value);
        //console.log(props.debitList);
        
      }

    return (
        <div>
            <h1>Debits</h1>
            <p className='text'><b>Total Debit Amount : </b>${props.debit.toFixed(2)}</p>
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
                <br />
                <input className='submit' type="submit" value="Add New Debit" />
            </form>

            <button onClick={openView}>View Balance</button>

          { // only show balance if viewBalance is true
            viewBalance && (
            <div>
                <AccountBalance accountBalance={props.accountBalance} />
            </div>
          )}

          <h2>Your Debit History</h2>
            <div className='cards'>{props.debitList.map((debt,index)=>{
                return <Cards key={index} card={debt} />
            })}</div>
            
        </div>
    );
}

export default Debits;
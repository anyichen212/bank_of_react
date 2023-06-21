    import React, {useState, useEffect} from 'react';
    import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
    import axios from 'axios';

    import Home from './components/Home';
    import UserProfile from './components/UserProfile';
    import LogIn from './components/Login';
    import Debits from './components/Debits';
    
    const App = (props) => {
      const [accountBalance, setAccountBalance] = useState(0.0)
      const [currentUser, setCurrentUser] = useState({
          userName: 'Bob Loblaw',
          memberSince: '08/23/99',
      } )
      const [creditList, setCreditList] = useState([])
      const [debitList, setDebitList] = useState([])
      const [load,setLoad] = useState(false);
      const [debit, setDebit] = useState(0.0);
      const [credit, setCredit] = useState(0.0);

    useEffect(() => {
      const d = axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits")
      .then(result => {
          setDebit(result.data);
          const newArr = [];
          newArr[0] = result.data;
          newArr[1] = "Initial Debit"
          const date = new Date(2023,5,20).toLocaleDateString();
          newArr[2] = date;
          setDebitList([newArr]);
      })
      .then(result => {
        const c = axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits")
        .then(result => {
            setCredit(result.data);
            const d = new Date(2023,6,20);
            setCreditList([result.data],[d],["Initial Debit"]);
        })
        .then(result => setLoad(true))
        });


    }, []);

    useEffect(() => {
        if(load){
            setAccountBalance(credit - debit);
        }
    }, [load, credit, debit])

      //mock log in
      const mockLogIn = (logInInfo) => {
        const newUser = {...currentUser}
        newUser.userName = logInInfo.userName
        setCurrentUser(newUser);
      }

        return (
          
          <Router>
          {/* navigation */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/userProfile">User Profile</Link>
                </li>
                <li>
                  <Link to="/logIn">LogIn</Link>
                </li>
                <li>
                  <Link to="/debits">Debits</Link>
                </li>
              </ul>
            </nav>

            {/* rounters */}
            <Routes>
              <Route 
                exact path="/*" 
                element={<Home accountBalance={accountBalance} debit={debit} credit={credit} />}
               />
              <Route 
                exact path="/userProfile" 
                element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />}
              />
              <Route 
                exact path="/login" 
                element={<LogIn user={currentUser} mockLogIn={mockLogIn} {...props} />}
                />
              <Route 
                path="/debits" 
                element={<Debits
                  credit={credit}
                  debit={debit}
                  setDebit={setDebit}
                  debitList={debitList} 
                  setDebitList={setDebitList} 
                  accountBalance={accountBalance} 
                  setAccountBalance={setAccountBalance}
                  />} 
                />
            </Routes>
          </Router>
            
        );
      }

    export default App;
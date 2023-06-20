    import React, {Component} from 'react';
    import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

    import Home from './components/Home';
    import UserProfile from './components/UserProfile';
    import LogIn from './components/Login';
    
    class App extends Component {
      constructor() {
        super();
    
        this.state = {
          accountBalance: 14568.27,
          currentUser: {
            userName: 'bob_loblaw',
            memberSince: '08/23/99',
          },
        }
      }

      //mock log in
      mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
      }

      render() {

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
              </ul>
            </nav>

            {/* rounters */}
            <Routes>
              <Route 
                exact path="/" 
                element={<Home accountBalance={this.state.accountBalance} />}
               />
              <Route 
                exact path="/userProfile" 
                element={<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />}
              />
              <Route 
                exact path="/login" 
                element={<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />}
                />
            </Routes>
          </Router>
            
        );
      }
    }
    
    export default App;
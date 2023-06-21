// src/components/UserProfile.js

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div className='text'><b>Username:</b> {this.props.userName}</div>
          <div className='text'><b>Member Since:</b> {this.props.memberSince}</div>

          <Link to="/">
            <button>Back Home</button>
          </Link>
        </div>
    );
  }
}

export default UserProfile;
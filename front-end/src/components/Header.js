import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div className="alt-header">
        <ul>
          <Link to="/1">Home</Link>
          
        </ul>
        <h1 className="alt-heading"><span className="alt-logo">alt</span>Updates</h1>
        <div className="profile-logo">
            <div className="user-profile"></div>
            <label className="profile-lebel">Profile</label>
        </div>
      </div>
    )
  }
}

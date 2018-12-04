import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="alt-header">
        <h1 className="alt-heading"><span className="alt-logo">alt</span>Updates</h1>
        <div>
            <div className="user-profile"></div>
            <label className="profile-lebel">Profile</label>
        </div>
      </div>
    )
  }
}

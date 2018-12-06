import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
    let profile;
    if (this.props.data) {
      const { first_name, last_name, url } = this.props.data;
      profile =
        <div className="profile-logo">
          <img className="user-profile"  />
          <label className="profile-lebel">{first_name + " " + last_name}</label>
        </div>

    }
    return (
      <div className="alt-header">
        <ul>
          <Link to="/1">Home</Link>
          <Link to="/signup">Sign Up</Link>
        </ul>
        <h1 className="alt-heading"><span className="alt-logo">alt</span>Updates</h1>
        {
          profile
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.currentUserData.userObj
  }
}

export default connect(mapStateToProps)(Header);

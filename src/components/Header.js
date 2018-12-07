import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
    let profile;
    if (this.props.data) {
      const { fullName } = this.props.data;
      profile =
        <Link to='/profile' className="profile-logo">
          <img className="user-profile" src={require('./../tempImg/profile.png')}  />
          <label className="profile-lebel">{fullName}</label>
        </Link>

    }
    return (
      <div className="alt-header">
        <ul>
          <Link to="/1">Home</Link>
          <Link to="/signup">Sign Up</Link>
        </ul>
        <h1 className="alt-heading"><img src={require('./../tempImg/logo_in_white.png')} />Updates</h1>
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

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './navLinks/Navbar';


class Header extends Component {
  render() {
    let profile;
    if (this.props.data) {
      const { fullName } = this.props.data;
      profile =
        <Link to='/profile' className="profile-logo">
          <img className="user-profile" src={require('../tempImg/profile.png')} alt='user'  />
          <label className="profile-lebel">{fullName}</label>
        </Link>

    }
    return (
      <div className="alt-header">
        <a href='/' className="alt-heading"><img src={require('./../tempImg/logo_in_white.png')} alt='logo' /><span>Updates</span></a>
        <div className="signed-in-link">
        {
          profile
        }
       <Navbar />
       
        </div>

       
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

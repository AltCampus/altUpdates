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
          <img className="user-profile" src={require('./../tempImg/praveen.jpg')}  />
          <label className="profile-lebel">{fullName}</label>
        </Link>

    }
    return (
      <div className="alt-header">
        <nav className="alt-heading"><span className="alt-logo">alt</span>Updates</nav>
        {
          profile
        }
        <ul className='right'>
          <Navbar />
        </ul>
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

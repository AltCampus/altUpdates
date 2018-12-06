import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
  render() {
    const { propData, userId } = this.props;

    if(userId) {
      console.log(userId, "current user data in profile");
      return <Redirect to="/5"/>
    }
    
    return (
      <div className="profile wrapper">
        <div className="profile__container">
          <div className="profile__img-container center">
            <img src={require('./../tempImg/praveen.jpg')} alt="user" className="profile__img"/>
            <div className="profile__name-container margin-tb">
              <h2 className="profile__name center">Name : <span className="profile__first-name">Praveen</span></h2>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__box color-white margin-tb padding-tb center">
                <h3 className="profile__header ">Last Tweet</h3>
                <p className="profile__detail">This is my tweet.</p>
            </div>
            <div className="profile__box color-white margin-tb padding-tb center">
                <h3 className="profile__header ">Last Code Challenge</h3>
                <p className="profile__detail">Last Code Challenge URL</p>
            </div>
          </div>
        </div>
        <div className="profile__list-container margin-tb padding-tb color-white">
          <h3 className="profile__list-header center">LIST</h3>
          <div className="profile__block-container">
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
            <div className="profile__block color center">
              <a href="#" className="profile__link">Day 1</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    propData: state.currentUserData,
    userId: state.currentUserId
  }
}

export default connect(mapStateToProps)(Profile);

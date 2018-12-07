import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
  render() {
    const { userData, userId, userInfo } = this.props;
    console.log(userInfo)
     let item;
    if(userData) {
      if (userData[userData.length - 1]) {
      item = (
        <div className="profile__info">
          <div className="profile__box color-white margin-tb padding-tb center">
            <h3 className="profile__header ">Last Tweet</h3>
            <p className="profile__detail">{userData[userData.length - 1].tweetURL}</p>
          </div>
          <div className="profile__box color-white margin-tb padding-tb center">
              <h3 className="profile__header ">Last Code Challenge</h3>
              <p className="profile__detail">{userData[userData.length - 1].codeChallenegeURL}</p>
          </div>
        </div>
      )
      }
    }
    if(userId) {
      return (
        <div className="profile wrapper">
          <div className="profile__container">
            <div className="profile__img-container center">
              <img src={require('./../tempImg/praveen.jpg')} alt="user" className="profile__img"/>
              <div className="profile__name-container margin-tb">
                <h2 className="profile__name center">Name : <span className="profile__first-name">{userInfo.fullName}</span></h2>
              </div>
            </div>
            {
              item
            }
          </div>
          <div className="profile__list-container margin-tb padding-tb color-white">
            <h3 className="profile__list-header center">LIST</h3>
            <div className="profile__block-container">
              {
                userData && userData.map((day, i) =>
                  <div className="profile__block color center" key={i}>
                    <a href="#" className="profile__link">{day.tweetURL}</a>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
    
  }
}

function mapStateToProps(state) {
  return {
    userData: state.currentUserData.dailyUpdates[0],
    userId: state.currentUserId,
    userInfo: state.currentUserData.userObj
  }
}

export default connect(mapStateToProps)(Profile);

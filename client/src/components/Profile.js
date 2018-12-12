import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Link } from 'react-router-dom';
import Grid from './Grid';



class Profile extends Component {
  
  state = {
    allUpdates: []
  }


componentWillMount = () => {
  console.log(this.props.userId)
  fetch(`http://localhost:8000/api/user/${this.props.userId}/updates`)
  .then(res => res.json())
  .then(data => 
    this.setState({
      allUpdates: data.updates.allUpdates
    })
  ) 
}

getUpdatedTime(repoDate) {
  let date = new Date(repoDate);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let current_date = new Date();
  let current_year = current_date.getFullYear();
  let current_month = current_date.getMonth();
  let current_day = current_date.getDate();
  let current_hour = current_date.getHours();
  let current_minute = current_date.getMinutes();
  let current_second = current_date.getSeconds();

  if(year < current_year) {
    return (current_year - year + ' years');
  } else if(month < current_month) {
    return (current_month - month) + ' months';
  } else if (day < current_day) {
    return (current_day - day) + ' days';
  } else if(hour < current_hour) {
    return (current_hour - hour) + ' hours';
  } else if(minute < current_minute) {
    return (current_minute - minute) + ' minutes';
  } else if(second < current_second) {
    return (current_second - second) + ' seconds';
  }

}


  render() {
    let count = 0;
    const { allUpdates } = this.state;
    const {  userId, userInfo } = this.props;

    if(!userId) return <Redirect to="/login" />

    let item;
    if(allUpdates) {
      if (allUpdates[allUpdates.length - 1]) {
      item = (
        <div className="profile__info">
          <div className="profile__box color-white margin-tb padding-tb center">
            <h3 className="profile__header ">About Tweet</h3>
            {/* <p className="profile__detail">{allUpdates[allUpdates.length - 1].tweetURL}</p> */}
            <p className="profile__detail">Total Tweets:   {allUpdates.length}</p>
            <p className="profile__detail">Last Update:   {this.getUpdatedTime(allUpdates[allUpdates.length - 1].date)} ago</p>
          </div>
          <div className="profile__box color-white margin-tb padding-tb center">
              <h3 className="profile__header ">Last Code Challenge</h3>
              <p className="profile__detail">{allUpdates[allUpdates.length - 1].codeChallenegeURL}</p>
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
              <img src={require('./../tempImg/profile.png')} alt="user" className="profile__img"/>
              <div className="profile__name-container margin-tb">
                <h2 className="profile__name center"><span className="profile__first-name">{userInfo.fullName}</span></h2>
              </div>
            </div>
            {
              item
            }
          </div>
          <Grid allUpdates={allUpdates} />
        </div>
      )
    } else {
      return <div></div>
    }
    
  }
}

function mapStateToProps(state) {
  return {
    userId: state.currentUserId,
    userInfo: state.currentUserData.userObj
  }
}

export default connect(mapStateToProps)(Profile);

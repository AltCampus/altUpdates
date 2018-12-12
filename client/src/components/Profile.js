import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect, Link } from 'react-router-dom';



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
            <h3 className="profile__header ">Last Tweet</h3>
            <p className="profile__detail">{allUpdates[allUpdates.length - 1].tweetURL}</p>
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
          <div className="profile__list-container margin-tb padding-tb color-white">
            <h3 className="profile__list-header center">LIST</h3>
            <div className="profile__block-container">
              {
                this.state.allUpdates && this.state.allUpdates.map((day, i) =>
                  <div className="profile__block color center" key={i}>
                    <Link to={`/profile/${day._id}`} className="profile__link">Day {++count}</Link>
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
    userId: state.currentUserId,
    userInfo: state.currentUserData.userObj
  }
}

export default connect(mapStateToProps)(Profile);

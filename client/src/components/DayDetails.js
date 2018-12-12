import React, { Component } from 'react'
import CLIP from './CLIP';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class DayDetails extends Component {
  render() {
      const { dailyUpdates } = this.props;
      const id = this.props.match.params.id;
      const one = dailyUpdates && dailyUpdates.filter(day => id === day._id);
      if(one) {
        return (
            <React.Fragment>
                <CLIP/>
                <div className="left-container day-details">
              <span className="date-container">Date: {new Date(one[0].date).toDateString()}</span>
              <div className="day tweet-container">
                  <h1 className="progress-category">Tweet:</h1>
                  <a className="tweet-url" href={one[0].tweetURL}>
                      {one[0].tweetURL}
                  </a>
              </div>
              <div className="day code-container">
                  <h1 className="progress-category">Code:</h1>
                  <a className="tweet-url" href={one[0].codeChallenegeURL}>
                      {one[0].codeChallenegeURL}
                  </a>
              </div>
              <div className="day reflection-container">
                  <h1 className="progress-category">Reflections:</h1>
                  <p>{one[0].reflection}</p>
              </div>
            </div>
            </React.Fragment>
          )
      } else {
         return <Redirect to='/profile'></Redirect>
      }
    
  }
}

const mapStateToProps = (state) => {
    return {
        dailyUpdates: state.currentUserData.dailyUpdates
    }
}

export default connect(mapStateToProps)(DayDetails)
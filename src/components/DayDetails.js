import React, { Component } from 'react'
import CLIP from './CLIP';

export default class DayDetails extends Component {
  render() {
    return (
      <React.Fragment>
          <CLIP/>
          <div className="left-container day-details">
        <span className="date-container">Date: 04/12/18</span>
        <div className="day tweet-container">
            <h1 className="progress-category">Tweet:</h1>
            <a className="tweet-url" href="https://twitter.com/ashwanigg3/status/1069659921854201856">
                https://twitter.com/ashwanigg3/status/1069659921854201856
            </a>
        </div>
        <div className="day code-container">
            <h1 className="progress-category">Code:</h1>
            <a className="tweet-url" href="https://twitter.com/ashwanigg3/status/1069659921854201856">
                https://twitter.com/ashwanigg3/status/1069659921854201856
            </a>
        </div>
        <div className="day reflection-container">
            <h1 className="progress-category">Reflections:</h1>
            <p>Everyday, everyone shows up. We learn, build, teach, discuss, and make progress on the software side of things. We keep the learning intense. We care utmost about it.</p>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

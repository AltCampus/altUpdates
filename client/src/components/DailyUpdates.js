import React, { Component } from 'react';
import { postUpdate } from '../store/actions/actions.js';
import { connect } from 'react-redux';
// import * as data from '../fakeData';
import {Redirect} from 'react-router-dom'
import CLIP from './CLIP';

class DailyUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetURL: '',
      codeChallenegeURL: '',
      reflection: '',
      date: new Date(),
      userId: this.props.userId
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.post(this.state);
    this.props.history.push('/profile')
  }

  render(props) { 
    const {userId}  = this.props
    if(!userId) return <Redirect to="/login"/>

    return (
      <div>
        <CLIP/>
        <div className="update wrapper left-container">
        <div className="update__container">
          <h2 className="update__header center">Update Today's Task</h2>
          <form className="update__form" onSubmit={this.handleSubmit}>
            <input 
              className="text-field margin-tb padding-tb update__field" 
              placeholder="Today's Tweet URL"
              id='tweetURL'
              onChange={this.handleChange}
            />
            <input 
              className="text-field margin-tb padding-tb update__field" 
              placeholder="Coding Challenge URL"
              id='codeChallenegeURL'
              onChange={this.handleChange}
            />
            <textarea 
              className="text-field margin-tb padding-tb update__field" 
              placeholder="Reflections" rows="5" 
              id='reflection'
              onChange={this.handleChange}
            ></textarea>

            <input type="submit" className="btn update__btn margin-tb padding-tb login__btn" value='Submit' />
          </form>
        </div>
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    post: (data) => dispatch(postUpdate(data))
  }
}

function mapStateToProps(state) {
  return {
    userId : state.currentUserId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyUpdates);
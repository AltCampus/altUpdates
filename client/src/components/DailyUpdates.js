import React, { Component } from 'react';
import { postUpdate } from '../store/actions/actions.js';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import CLIP from './CLIP';
// import moment from moment;

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

  componentDidMount() {
    let allUpdates = [];
    const {userId} = this.props;

    if(userId) {
      fetch(`http://localhost:8000/api/user/${userId}/updates`)
        .then(res => res.json())
        .then(data => {
          allUpdates = data.updates.allUpdates;
          for(const update of allUpdates) {
            if(new Date(update.date).toDateString() === new Date().toDateString()) {
              console.log('true')
              this.props.history.push('/profile');
            }
          }
        })
        .catch(err => {
          console.log(err);
        })  
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
    this.props.history.push('/profile');
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
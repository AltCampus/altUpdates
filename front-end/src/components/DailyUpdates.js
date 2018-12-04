import React, { Component } from 'react';
import { postUpdate } from '../actions/actions';
import { connect } from 'react-redux';
import CLIP from './CLIP';

class DailyUpdates extends Component {

  state = {
    tweetURL: '',
    codeChallenegeURL: '',
    reflection: '',
    date: new Date()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.post(this.state)
  }

  render(props) {
    console.log(this.props)
    return (
      <div>
        <CLIP/>
        <div className="update wrapper left-container">
        <div className="update__container">
          <h2 className="update__header center">Update Today's Performance</h2>
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

            <input type="submit" className="btn update__btn margin-tb padding-tb" value='Submit' />
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

export default connect(null, mapDispatchToProps)(DailyUpdates);
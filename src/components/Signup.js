import React, {Component} from 'react';
import CLIP from './CLIP';
import {connect} from 'react-redux';
import { signUpAction } from '../store/actions/actions';

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fullName : '',
      email : '',
      username : '',
      password : '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  
  render() {
    return (
      <React.Fragment>
        <CLIP/>
        <div className="Signup">
         <form className="Signup__form" onSubmit={this.handleSubmit}>
           <input
           onChange={this.handleChange}
           name="fullName" 
           type="text" 
           className="Signup__username" 
           placeholder="Enter your Full Name"
           required/><br/>
           <input 
           onChange={this.handleChange}
           name="email"
           type="email" 
           className="Signup__email" 
           placeholder="Enter Your Email"
           required/><br/>
           <input 
           onChange={this.handleChange}
           name="username"
           type="text" 
           className="Signup__username" 
           placeholder="Enter your username"
           required/><br/>
           <input 
           onChange={this.handleChange}
           name="password"
           type="password" 
           className="Signup__password" 
           placeholder="Enter your password"
           required/><br/>
           <button className="Signup__btn">Signup</button>
         </form>
       </div>
      </React.Fragment>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    signUp : (userCreds) => dispatch(signUpAction(userCreds))
  }
}

export default connect(null, mapDispatchToProps)(Signup);
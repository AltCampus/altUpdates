import React, {Component} from 'react';
import CLIP from './CLIP';
import {connect} from 'react-redux';
import { signUpAction } from '../store/actions/actions';

class Signup extends Component{
  
  state = {
    fullName : '',
    email : '',
    username : '',
    password : ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleConfirmPAssword = e => {
    this.setState({
      confirmPassword : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {password, confirmPassword } = this.state;
    if(password === confirmPassword) {
      this.props.signUp(this.state);
    }
  }

  handleUserName = e => {
    this.setState({
      inputUserName: true
    }) 
  }

  handleUserNameMsg = e => {
    this.setState({
      inputUserName: false
    }) 
  }
  
  render() {
    const {password, confirmPassword} = this.state;
    const { message } = this.props;
    
    return (
      <React.Fragment>
        <CLIP/>
        <div className="Signup">
        <h1>Signup Form</h1>
         <form className="Signup__form" onSubmit={this.handleSubmit}>
          <input
          onChange={this.handleChange}
          name="fullName" 
          type="text" 
          className="Signup__username" 
          placeholder="Enter your Full Name"
          required
          />
          <br/>
          <input 
          onChange={this.handleChange}
          name="email"
          type="email" 
          className="Signup__email" 
          placeholder="Enter Your Email"
          required/><br/>
          <input 
          onChange={this.handleChange}
          onFocus={this.handleUserName}
          onBlur={this.handleUserNameMsg}
          name="username"
          maxLength='10'
          pattern="(?=.*\d)(?=.*[a-z]).{4,}"
          type="text" 
          autoComplete='username'
          className="Signup__username" 
          placeholder="Enter your username"
          required/>
          {
            this.state.inputUserName 
            ? <label className='userAlertMsg'>username must contain at least one number and lowercase letter, and at least 4 or more characters</label> 
            : (message.length) ? (message === '200') ? '' : <label className='userAlertMsg'> { message } </label>   
            : ''      
          }
          <br/>
          
          <input 
          onChange={this.handleChange}
          name="password"
          type="password" 
          autoComplete='new-password'
          className="Signup__password" 
          placeholder="Enter your password"
          required/><br/>
          <input 
          onChange={this.handleConfirmPAssword}
          name="confirmPassword"
          type="password" 
          autoComplete='new-password'
          className="Signup__password" 
          placeholder="Confirm password"
          required/>
          {
            (confirmPassword) ?
              (password === confirmPassword) ? <label className='userAlertMsg green-text'>Password matched</label> : <label className='userAlertMsg'>Password not matched</label>
            : ''
          }
          <br/>
          <button className="Signup__btn">Signup</button>
        </form>
      </div>
      {
        message === '200' ? <div className='modal-container'>
        <div className='modal'>
          <p>!! SiguUp Successfull !!</p> 
          <a href='/login' className='closeModal'>close</a>
        </div>
      </div> : ''
      }
      </React.Fragment>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    signUp : (userCreds) => dispatch(signUpAction(userCreds))
  }
}

function mapStateToProps(state) {
  return {
    message: state.currentUserData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
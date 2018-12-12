import React, {Component} from 'react';
import CLIP from './CLIP';
import { connect } from 'react-redux';
import { authAction, setUserAtIntial } from './../store/actions/actions';
import { Redirect } from 'react-router-dom';
import Loader from './Loader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg : '',
      isLoading : false,
      userCreds : {
        username : '',
        password : ''
      }
    }  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(navigator.onLine) {
      this.props.authUser(this.state.userCreds);
    } else {
      this.setState({
        errMsg : "Internet is not connected. Please get the secure connection."
      })
    }

  }
 
  hanldeChange = (e) => {
    this.setState({
      userCreds : {
        ...this.state.userCreds,
        [e.target.name] : e.target.value
      }
    })
  }

  componentDidMount() {
    let userResponse; 

    if(navigator.onLine) {
      this.setState({
        isLoading : true
      }, function() {
        fetch('http://localhost:8000/api/me')
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoading : false
          });
          userResponse = data.user;
          return this.props.setInitalUser(userResponse)
        })
        .catch(err => {
          this.setState({
            isLoading : false
          })
        });
      })  
    } else {
      this.setState({
        errMsg : "Internet is not connected. Please get the secure connection."
      })
    }
  }
  
  render() {

    if(this.props.currentUserId) return <Redirect to="/" />
    
    return (
    <React.Fragment>  
      <CLIP/>
      {
        this.state.isLoading ? 
        <Loader /> : this.state.errMsg ? (
          <div className="err-msg animated bounceInDown">
             {this.state.errMsg}             
          </div>
        ) : 
        (
           <div className='login'>
            <h1 className='subtitle'>Login Form</h1>
            {
              (this.props.msg) ?  <label className='userAlertMsg'> Incorrect user name and password </label> : ''
            }
            <form className="login__form" onSubmit={this.handleSubmit}>
              <input type="text" name='username' autoComplete='usrname' onChange={this.hanldeChange} className="login__email" placeholder="enter your username"/><br/>
              <input type="password" name='password' autoComplete='password' onChange={this.hanldeChange} className="login__password" placeholder="enter your password"/><br/>
              <button className="login__btn">Login</button>
            </form>
          </div>
        )
      }
    </React.Fragment>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userCreds) => dispatch(authAction(userCreds)),
    setInitalUser : (data) => dispatch(setUserAtIntial(data))
  }
}

function mapStateToProps(state) {
  return {
    currentUserId : state.currentUserData.userObj,
    msg : state.currentUserData.msg
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, {Component} from 'react';
import CLIP from './CLIP';
import { connect } from 'react-redux';
import { authAction } from './../store/actions/actions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : ''
    }  
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authUser(this.state);
  }
  
  componentDidMount() {
    if(document.cookie) {
      const userCredsArr = document.cookie.slice(document.cookie.indexOf('username')).split(' ');
      
      const username = userCredsArr[0].slice(userCredsArr[0].indexOf('=')+1);
  
      const password = userCredsArr[1].slice(userCredsArr[1].indexOf('=')+1);
  
      console.log(username, password)
  
      this.props.authUser({
        username,
        password
      });
    } 
  }
  

  hanldeChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {

    if(this.props.currentUserId) return <Redirect to="/" />
    
    return (
    <React.Fragment>
      <CLIP/>
      <div className='login'>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <input type="text" name='username'  onChange={this.hanldeChange} className="login__email" placeholder="enter your username"/><br/>
          <input type="password" name='password' onChange={this.hanldeChange} className="login__password" placeholder="enter your password"/><br/>
          <button className="login__btn">Login</button>
        </form>
      </div>
    </React.Fragment>
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userCreds) => dispatch(authAction(userCreds))
  }
}

function mapStateToProps(state) {
  return {
    currentUserId : state.currentUserId
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
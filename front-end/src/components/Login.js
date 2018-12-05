import React, {Component} from 'react';
import CLIP from './CLIP';
import * as data from './../data.json';


class Login extends Component {
  
  state = {
    username : '',
    password : ''
  }

handleSubmit = (e) => {
  e.preventDefault();
  const {username,password} = this.state;
  const currentUser = data.default.filter(user => username === user.first_name);
  console.log(currentUser)
}

  hanldeChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    console.log(data);
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


export default Login;
import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <form className="login__form">
        <input type="text" className="login__email" placeholder="enter your email"/><br/>
        <input type="text" className="login__password" placeholder="enter your password"/><br/>
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
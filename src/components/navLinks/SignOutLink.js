import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLink = () => {
  return (
		<ul className='right'>
			<li><NavLink to='/signup' className="auth-btn">Signup</NavLink></li>
			<li><NavLink to='/login' className="auth-btn">Login</NavLink></li>
		</ul>
	)
}

export default SignOutLink ;
import React from 'react';
import { logOut } from '../../store/actions/actions';
import  { connect } from 'react-redux';

const SignInLink = (props) => {
  return (
		<ul className='right'>
			<li><a onClick={() => props.logOut()}>Log Out</a></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => dispatch(logOut())
	}
}

export default connect(null, mapDispatchToProps)(SignInLink);

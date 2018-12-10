import React from 'react';
import { logOut } from '../../store/actions/actions';
import  { connect } from 'react-redux';

const SignInLink = (props) => {
  return (
		<button onClick={() => props.logOut()} className="auth-btn right">Log Out</button>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => dispatch(logOut())
	}
}

export default connect(null, mapDispatchToProps)(SignInLink);

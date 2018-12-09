import React from 'react';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';

const Navbar = (props) => {
	const { Id } = props;
	const links = Id ? <SignInLink /> : <SignOutLink /> ;
  return (
		<nav>
			<div className='container'>
				{ links }
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	return {
		Id : state.currentUserId
	}
}

export default connect(mapStateToProps)(Navbar);
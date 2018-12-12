import React, { Component } from 'react'
import {Redirect, Link } from 'react-router-dom';
// import { usersList } from '../store/actions/actions';


export default class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }


componentWillMount = () => {
  fetch("http://localhost:8000/api/users")
  .then(res => res.json())
  .then(data => {
    this.setState({
      users: data.user
    })
  })
}
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { users } = this.state
  // users.filter(value => value.fullName ? this.setState({ users : e.target.value}) : value);
  // }

  // handleChange = (e) => {
    
  // }

  render() {

    const { users } = this.state;
    // if(!user) return <Redirect to="/login"/>
    return (
      <div className="users">
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="search__users" onChange={this.handleChange} placeholder="search profile"/>
        </form>
        {
          users.map((data,i) => 
          <Link to="/profile/" className="usercards" key ={i}>
          <div className="usercard">
          <p>
          name: {data.fullName}
          </p>
          <p>
          username: {data.username}
          </p>
          </div>
          </Link>)
        }
      </div>
    )
  }
}



// const mapStateToProps = (state) => {
//   usersList: state.usersList
// }


// export default connect(mapStateToProps)(Users);
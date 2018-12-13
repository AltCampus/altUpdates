import React, { Component } from 'react'
import {Redirect, Link } from 'react-router-dom';

export default class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }


componentWillMount = () => {
  console.log(this.props);
  fetch("http://localhost:8000/api/users")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      users: data.user
    })
  })
}


  render() {

    const { users } = this.state;
    // if(!user) return <Redirect to="/login"/>
    console.log(users);
    return (
      <div>
        {
          users.map((data,i) => 
          <Link to="/profile/" className="usercard" key ={i}>
          <a href="#">
          {data.fullName}
          </a>
          <p>
          {data.username}
          </p>
          </Link>)
        }
      </div>
    )
  }
}

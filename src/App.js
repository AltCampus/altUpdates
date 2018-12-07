import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import DayDetails from './components/DayDetails';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">     
          <Header />
          <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/" component={DailyUpdates}/>
            <Route path="/updates/:id" component={DayDetails}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';
import CLIP from './components/CLIP';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import DayDetails from './components/DayDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <CLIP/>
        <DailyUpdates /> */}
        <Profile />
        <CLIP/>
        <Signup/>
        {/* <Login/> */}
        <DailyUpdates />
        {/* <DailyUpdates /> */}
        <DayDetails />
      </div>
    );
  }
}

export default App;

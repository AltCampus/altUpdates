import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';
import CLIP from './components/CLIP';
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
        {/* <DailyUpdates /> */}
        {/* <DayDetails /> */}
      </div>
    );
  }
}

export default App;

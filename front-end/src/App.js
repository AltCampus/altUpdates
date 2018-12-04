import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';
import CLIP from './components/CLIP';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CLIP/>
        <Signup/>
        {/* <Login/> */}
        <DailyUpdates />
      </div>
    );
  }
}

export default App;

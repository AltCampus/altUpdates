import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';
import CLIP from './components/CLIP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CLIP/>
        <DailyUpdates />
      </div>
    );
  }
}

export default App;

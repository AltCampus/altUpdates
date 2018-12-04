import React, { Component } from 'react';
import Header from './components/Header';
import DailyUpdates from './components/DailyUpdates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DailyUpdates />
      </div>
    );
  }
}

export default App;

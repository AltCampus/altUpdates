import React, { Component } from 'react';
import CLIP from './components/CLIP';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CLIP/>
        <DailyUpdates />
      </div>
    );
  }
}

export default App;

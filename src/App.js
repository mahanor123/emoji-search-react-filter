import React, { Component } from 'react';
import './App.css';
import Filter from  './components/filter.js';
import Ribbon from './components/forkRibbon';

class App extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Ribbon/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Score />
        <Solution />
        <Letters />
      </div>
    );
  }
}

export default App;

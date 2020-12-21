import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'

class App extends Component {
  constructor(){
    super()
    this.state= {
      letterStatus:this.generateLetterStatuses(),
      solution: {
        word: '',
        hint: ''
      },
      score: 100
    }
  }
  generateLetterStatuses(){
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  render(){
    return (
      <div className="App">
        <Score score={this.state.score}/>
        <Solution letterStatus = {this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus = {this.state.letterStatus}/>
      </div>
    );
  }
}

export default App;

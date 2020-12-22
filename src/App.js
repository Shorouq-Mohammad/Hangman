import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Lose from './components/Lose'
import randomWord from './components/Words'
import step0 from "./components/images/0.jpg";
import step1 from "./components/images/1.jpg";
import step2 from "./components/images/2.jpg";
import step3 from "./components/images/4.jpg";
import step4 from "./components/images/6.jpg";

class App extends Component {
  constructor(){
    super()
    this.state= {
      letterStatus:this.generateLetterStatuses(),
      solution: randomWord(),
      score: 100,
      images: [step0, step1, step2, step3, step4], 
      mistakes: 0,
      win: -1 //1 if win & 0 if lose
    }
  }
  generateLetterStatuses(){
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = (letter, end=false) => {
    let letterStatus = {...this.state.letterStatus}
    if(end){
      [...this.state.solution.word].forEach(c => letterStatus[c] = true)
      this.setState({letterStatus, win : 0})
    }else{
      letterStatus[letter] = true
      this.isCharIncluded(letterStatus, letter)
    }
  }

  isCharIncluded =(letterStatus, letter) => {
    let num
    let mistake = this.state.mistakes
    if(this.state.solution.word.includes(letter)){
      num = 5
    }else{
      num = -20
      mistake += 1
    }
    this.setState({
      score: this.state.score + num,
      mistakes : mistake,
      letterStatus
    }, ()=>{
      this.checkEndGame()
    })
  }

  checkEndGame = () => {
    if(this.state.mistakes === 5){
      this.selectLetter(this.state.solution.word, true)
    }else if([...this.state.solution.word].every(c => this.state.letterStatus[c])){
      this.setState({win: 1}, () => this.gameEnd())
    }
  }

  gameEnd = () =>{
    let temp = {}
    if(this.state.win){
      temp = {
        letterStatus:this.generateLetterStatuses(),
        solution: randomWord(),
        mistakes: 0,
        win: -1
      }
    }else{
      temp = {
        letterStatus:this.generateLetterStatuses(),
        solution: randomWord(),
        score: 100,
        mistakes: 0,
        win: -1
      }
    }
    this.setState(temp)
  }

  render(){
    return (
      <div className="App">
        <Score score={this.state.score}/>
        {this.state.win === 0 ? <Lose gameEnd={this.gameEnd}/>:<img src={this.state.images[this.state.mistakes]} alt=""/>}
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'

class App extends Component {
  
  state = {
    value1 : 0,
    value2 : 0,
    value3 : 0,
    proposedAnswer : 0,
	numQuestions : 0,
	numCorrect : 0
  }
  




  answerTrue = () =>{
    if(this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer){
       this.setState((currentState)=>({numCorrect : (currentState.numCorrect + 1)}))
    }
    this.setState((currentState)=>({numQuestions : (currentState.numQuestions + 1)}))
  };

  answerFalse = () =>{
    if(this.state.value1 + this.state.value2 + this.state.value3 !== this.state.proposedAnswer){
       this.setState((currentState)=>({numCorrect : (currentState.numCorrect + 1)}))
    }
    this.setState((currentState)=>({numQuestions : (currentState.numQuestions + 1)}))
    
  };

  render() {
        
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
	  <Game value1={this.state.value1} 
            value2={this.state.value2} 
            value3={this.state.value3} 
            proposedAnswer={this.state.proposedAnswer} 
            answerTrue={this.answerTrue} 
            answerFalse={this.answerFalse}/>
      </div>
    );
  }
}

export default App;

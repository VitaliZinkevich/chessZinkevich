import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './components/test'
import TestWithChessboard from '../src/components/TestWithChessboard'



class App extends Component {



  render() {
    return (
      <div className="App">
      
      <TestWithChessboard></TestWithChessboard>
      
      </div>
    );
  }
}

export default App;

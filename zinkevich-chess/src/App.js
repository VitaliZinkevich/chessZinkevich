import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './components/test'
import Chessboard from '../src/components/Chessboard'
import GameMenu from './components/GameMenu'
import Score from './components/Score'
import GameButtons from './components/GameButtons'


class App extends Component {



  render() {
    return (
      <div className="App">
      <div className='container'>
      <div className='row'>
      <div className='col-2'><GameMenu/></div>
      <div className='col-7 d-flex flex-column justify-content-right align-items-center'><Chessboard></Chessboard>
      <div className='row'>

        <div className='col-8'>
        <GameButtons/>
        </div>

      </div>
      </div>
      <div className='col-3'><Score/></div>
      </div>
     
      
      
      </div>
      </div>
    );
  }
}




export default App




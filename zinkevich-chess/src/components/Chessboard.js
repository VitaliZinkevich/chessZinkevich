import React, { Component } from 'react'

// import {stockfish} from 'stockfish'
// var stockfish = require("stockfish")
//  console.log(stockfish)




export default class Chessboard extends Component {
  // https://github.com/oakmac/chessboardjs/issues/52 мерцают фигуры
  // https://github.com/oakmac/chessboardjs/issues/55 лечение вроде как

render() {
console.log('BOARD RENDER')


    return (
      <div id='board1' style={{width: '600px'}} className={'center-block'}>
        
      </div>
    )
  }
}

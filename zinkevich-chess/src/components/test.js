import React, { Component } from 'react'
import Chess from 'chess.js'
import {Chessboard} from 'cm-chessboard'

var chess = new Chess();

while (!chess.game_over()) {
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.pgn());
console.log(Chessboard);

//let board = new Chessboard(document.getElementById("containerId"),
//            { position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR" })

export default class Test extends Component {

  



  render() {
    return (
      <div>

        <div id='containerId'>`12</div>

          
      </div>
    )
  }
}

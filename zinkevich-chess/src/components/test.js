import React, { Component } from 'react'
import Chess from 'chess.js'
import {Chessboard} from 'cm-chessboard'
// import ReactDOM from 'react-dom'

// import Chessboard from 'react-chessboardjs-wrapper'
// import Chessboard from 'reactjs-chessboard'
// import Chessboard from 'react-chessboardjs'

var chess = new Chess();
while (!chess.game_over()) {
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
// console.log(chess.pgn());
// console.log(Chessboard)
// console.log(document)
// console.log(ReactDOM)

export default class Test extends Component {

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.containerId = React.createRef();
    
  }

state={
  upd:'no'
}




componentDidMount() {
      console.log('componentDidMount')
      // console.log(this.refs)
      // console.log(document)
      // ReactDOM.findDOMNode(this.refs.myDiv)
      let board = ()=>{
        new Chessboard(document.getElementById('iam'),
                { position: "rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR" })
              }
      // this.setState({...this.state,upd:'yes'})
      board()
}

  render() {
    //console.log(this.containerId)
    // console.log(document.getElementById('board'))
    // console.log(document)
    return (
      <div id='iam' ref='myDiv'></div>


      // <Chessboard
      //   // blackSquareColour="steelblue"
      //   // //  dropOffBoard={false} 
      //   // fen="rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R"

      //   // isDraggable={false}
      //   // orientation="b"
      //   // pieceTheme="uscf"
      //   // showCoordinates={false}
      //   // sparePieces={true}
      //   // style={{
      //   //   border: '2px solid lightgrey'
      //   // }}
      //   // whiteSquareColour="aliceblue"
      //   // width={1000}


      //   // onChange={(oldPos, newPos) => console.log('onChange fired', oldPos, newPos)}
      //   // onDragMove={(algebraic, fromSquare, piece, fen, orientation) =>
      //   //   console.log('onDragMove fired', algebraic, fromSquare, piece, fen, orientation)}
      //   // onDragStart={(square, piece, fen, orientation) =>
      //   //   console.log('onDragStart fired', square, piece, fen, orientation)}
      //   // onDrop={(square, toSquare, piece, newPosition, fen, orientation) =>
      //   //   console.log('onDrop fired', square, toSquare, piece, newPosition, fen, orientation)}
      //   // onMouseOutSquare={(algebraic, piece, fen, orientation) =>
      //   //   console.log('onMouseOutSquare fired', algebraic, piece, fen, orientation)}
      //   // onMouseOverSquare={(algebraic, piece, fen, orientation) =>
      //   //   console.log('onMouseOverSquare fired', algebraic, piece, fen, orientation)}
      //   // onMoveEnd={(oldPos, newPos) => console.log('onMoveEnd fired', oldPos, newPos)}
      //   // onResize={(oldWidth, newWidth) => console.log('onResize fired', oldWidth, newWidth)}
      //   // onSnapbackEnd={(piece, square, fen, orientation) =>
      //   //   console.log('onSnapbackEnd fired', piece, square, fen, orientation)}
      //   // onSquareClick={(isRightClick, square, piece, fen, orientation) => console.log(isRightClick, square, piece, fen, orientation)}


      // >
      // </Chessboard>

    )
  }
}

import React, { Component } from 'react'
import {connect} from 'react-redux'

class Chessboard extends Component {
  // https://github.com/oakmac/chessboardjs/issues/52 мерцают фигуры
  // https://github.com/oakmac/chessboardjs/issues/55 лечение вроде как

render() {
//console.log('BOARD RENDER')


    return (
    
      <div 
      id='board1' 
      style={{width: '600px', height: '600px'}} 
      className={this.props.gameStatus === false ? 'd-none': 'center-block'}>
        
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
  gameStatus: state.gameStatus.gameStatus,
  }
}

export default connect(mapStateToProps)(Chessboard)
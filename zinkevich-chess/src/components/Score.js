import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

class Score extends PureComponent {
  
  state= {score: 0}

  componentWillReceiveProps(p) {
    this.setState({score:p.score}, ()=>{this.updateCanvas(p.score)})
    
  }

  updateCanvas(num) {
    // console.log('updateCanvas')
    //console.log(num)
    console.log(num)
    const ctx = this.refs.canvas.getContext('2d');
    ctx.translate(0, 0)
    
    num = parseFloat (num)
    if (num === NaN || num === '#') {
      // не рисует график после мата, оставить цвет победителя
    } else {
      ctx.clearRect(0, 0, 50, 600);
      ctx.font = "30px Arial";
     
      // ctx.translate(0, 300)
    }

    if (num > 0 ) {
      // ctx.fillStyle = "#ff0000"
      // ctx.fillRect(0, 300, 50, -200)
      if (this.state.score !== null) {
        ctx.strokeText(this.state.score, 0, 270)
      }
    } 
    
    if (num < 0){
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 300, 50, 200)
      if (this.state.score !== null) {
        ctx.strokeText(this.state.score, 0, 300)
      }
      
    }



    // fillText(text,x,y) - draws "filled" text on the canvas
    // strokeText(text,x,y) - draws text on the canvas (no fill)
    
    
}

  render() {

    return (
    <div className='d-flex'>
    
    <canvas ref='canvas' width="70" height="600"></canvas>
    
      
      <div>Game PGN:</div>
    </div>
      
    )
  }
}


let mapStateToProps = (state) => {
  return {
  score: state.gameStatus.score,
  }
}


export default  connect(mapStateToProps)(Score);
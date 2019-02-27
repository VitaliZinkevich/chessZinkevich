import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

class Score extends PureComponent {
  
  state= {score: 0}

  componentWillReceiveProps(p) {
    if (p.score !== '#') {
    this.setState({score:p.score}, ()=>{this.updateCanvas(p.score)})
    } else {
    // мат
    }
    
  }

  componentDidMount(){
    this.updateCanvas(0)
  }

  updateCanvas(num) {
 
    const ctx = this.refs.canvas.getContext('2d');
 
    num = parseFloat (num)

    if (num === '#') {
      // остается последний график
    } else {
      ctx.clearRect(0, 0, 50, 600);
      ctx.fillStyle = '#a0a0a0'
      ctx.fillRect(0,0, 50, 600)
      ctx.font = "20px Arial";
    }

    if (num > 0 ) {
      ctx.fillStyle = '#ffffff'
      for (let i = 0; i<=this.props.score; i+=0.01) {
        ctx.fillRect(0, 300, 50, -(num*25)) // works
      }
           
      if (this.state.score !== null) {
        ctx.fillStyle = "#000000"
        ctx.fillText(this.state.score, 0, 320, 50)
      }
    } 
    
    if (num < 0){
      ctx.fillStyle = '#000000'
      for (let i = 0; i>=this.props.score; i-=0.01) {
        ctx.fillRect(0, 300, 50, -(i*25))
      }

      if (this.state.score !== null) {
        ctx.fillStyle = "#000000"
        ctx.fillText(this.state.score, 0, 295, 50)
      }
      
    }
    
}

  render() {
    
    return (
    <div className={this.props.gameStatus === false ? 'd-none' : 'd-flex'}>
    <div>  
      <canvas ref='canvas' width="50" height="600"></canvas>
    </div>
      
    <div className='d-flex flex-column w-100 mt-5'>
      <div className='w-100'>Game PGN:</div>
      <div>{this.props.pgn}</div>
      

      
    </div>
    
      
    <div>{this.props.won}</div>
   
    </div>
      
    )
  }
}


let mapStateToProps = (state) => {
  return {
  score: state.gameStatus.score,
  pgn: state.gameStatus.gamePGN,
  won: state.gameStatus.gameWon,

  gameStatus: state.gameStatus.gameStatus,
  }
}


export default  connect(mapStateToProps)(Score);
import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import {gameStatusAction} from '../redux/actions/gameStatusAction'

class GameButtons extends PureComponent {

  stopGame =()=>{
    this.props.dispatch(gameStatusAction())
    
  }

  render() {
    return (
      <div className={this.props.gameStatus === false ? 'd-none':'d-block'}>
        
       <button 
       className="btn btn-danger"
       onClick={this.stopGame}
       >Stop this game</button>
      <p>{this.props.search}</p>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
    return {
  
    gameStatus: state.gameStatus.gameStatus,
    search: state.gameStatus.searchStatus
    }
  }


export default  connect(mapStateToProps)(GameButtons);
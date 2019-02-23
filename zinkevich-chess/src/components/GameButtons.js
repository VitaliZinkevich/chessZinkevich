import React, { PureComponent } from 'react'
import {connect} from 'react-redux'


class GameButtons extends PureComponent {
  render() {
    return (
      <div className={this.props.gameStatus === false ? 'd-none':'d-block'}>
        
       <button className="btn btn-danger">Stop this game</button>

      </div>
    )
  }
}


let mapStateToProps = (state) => {
    return {
  
    gameStatus: state.gameStatus.gameStatus,

    }
  }


export default  connect(mapStateToProps)(GameButtons);
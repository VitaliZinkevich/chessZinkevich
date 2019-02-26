import React, { PureComponent } from 'react'

import {connect} from 'react-redux'

//actions 
import {userGameOptInputsAction} from '../redux/actions/gameOptActons'

import {GAME} from './Game'
class GameMenu extends PureComponent {

    componentDidMount() {
        // console.log('componentWillReceiveProps')
        // this.setState({},()=>{console.log('after set state')})
        this.newGame()
    }

    newGame=()=>{
        
        let game = GAME({book: 'book.bin'})

        game.reset()
        game.setTime(1, 0)
        game.setSkillLevel(20)
        game.setPlayerColor('white')
        game.setDisplayScore(false)
        game.start()
        
    }

    handleInputs=(e, opt=null)=>{
        e.preventDefault()
        this.props.dispatch (userGameOptInputsAction(e, opt))
    }
    

  render() {
    //  console.log(window)
  
        let gameType=['Man vs Stockfish', 'Stockfish vs Stockfish','Man vs Man' ]
        let gameTypeView = gameType.map ((el)=>{return <button 
            disabled={this.props.gameStatus === false ? false : true}
            key={el} 
            name={'gameType'}
            onClick={(e)=>{this.handleInputs(e, el)}}  
            aria-pressed="true"
            onMouseDown={(e)=>{e.preventDefault()}}
            className={this.props.gameType === el ? 'btn  btn-primary active' :'btn  btn-primary'}> 
            {el}</button>})



    return (
    <div>
    <div>
        {gameTypeView}
    </div>

        <p>Base time (min)</p>
        <input 
        disabled={this.props.gameStatus === false ? false : true}
        onChange={(e)=>{this.handleInputs(e)}} 
        type='number'
        name='time'
        value={this.props.time}
        />
        <p>Increment (sec)</p>
        <input 
        disabled={this.props.gameStatus === false ? false : true}
        onChange={(e)=>{this.handleInputs(e)}}  
        value={this.props.increment}
        type='number'
        name='increment'
        />
        
        <div className={this.props.gameType === 'Stockfish vs Stockfish' ? 'd-none': null}>
        <p>
            Your color:
        </p>

        <button 
        disabled={this.props.gameStatus === false ? false : true}
        onClick={(e)=>{this.handleInputs(e, 'white')}}
        name='color' 
        onMouseDown={(e)=>{e.preventDefault()}}
        className={this.props.color === 'white' ? 'btn  btn-primary active' : 'btn  btn-primary'} 
        >
        white
        </button>
        <button 
        disabled={this.props.gameStatus === false ? false : true}
        onClick={(e)=>{this.handleInputs(e, 'black')}}
        onMouseDown={(e)=>{e.preventDefault()}}
        className={this.props.color === 'black' ? 'btn  btn-primary active' : 'btn  btn-primary'}
        name='color' 
        >
        black
        </button>
        </div>
        
        <p>Stockfish level</p>
        
        <select
        disabled={this.props.gameStatus === false ? false : true}
        onChange={(e)=>{this.handleInputs(e)}}
        name="stockfishLevel"
        value={this.props.stockfishLevel}
        >
        <option value='20'>20</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
        </select>

        <p>Display Score</p>

        <button 
        disabled={this.props.gameStatus === false ? false : true}
        name='displayScore'
        onMouseDown={(e)=>{e.preventDefault()}}
        onClick={(e)=>{this.handleInputs(e, true)}}
        className={this.props.displayScore === true ? 'btn  btn-primary active' :'btn  btn-primary'}
        > Yes
        </button>
        <button 
        disabled={this.props.gameStatus === false ? false : true}
        name='displayScore' 
        onMouseDown={(e)=>{e.preventDefault()}}
        onClick={(e)=>{this.handleInputs(e, false)}}
        className={this.props.displayScore === false ? 'btn  btn-primary active' :'btn  btn-primary'}
        > No
        </button>

        <button 
        disabled={this.props.gameStatus === false ? false : true}
        className='btn btn-success'
        onMouseDown={(e)=>{e.preventDefault()}}
        onClick={this.newGame}
        >___Start___</button>
    </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
  
    gameType: state.gameOpt.gameType,
    time: state.gameOpt.time,
    increment: state.gameOpt.increment,
    color: state.gameOpt.color,
    stockfishLevel: state.gameOpt.stockfishLevel,
    displayScore: state.gameOpt.displayScore,

    gameStatus: state.gameStatus.gameStatus,
    }
  }


export default  connect(mapStateToProps)(GameMenu);
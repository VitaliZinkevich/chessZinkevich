import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

//actions 
import {userGameOptInputsAction} from '../redux/actions/gameOptActons'
import {gameStatusAction} from '../redux/actions/gameStatusAction'

// controller for game
import {GAME} from './Game'
class GameMenu extends PureComponent {

    componentDidMount() {
        // console.log('componentWillReceiveProps')
        // this.setState({},()=>{console.log('after set state')})
        //this.newGame()
    }

    newGame=()=>{
        this.props.dispatch(gameStatusAction())
        let game = GAME({book: 'book.bin'})

        game.reset()
        game.setTime(this.props.time, this.props.increment)
        game.setSkillLevel(this.props.stockfishLevel)
        game.setPlayerColor(this.props.color)
        
        game.setDisplayScore(this.props.displayScore)
        game.start()
        
    }

    handleInputs=(e, opt=null)=>{
        e.preventDefault()
        this.props.dispatch (userGameOptInputsAction(e, opt))
    }
    

  render() {
    //  console.log(window)
  
        let gameType=['Man vs Comp' ]

        let gameTypeView = gameType.map ((el)=>{return <button 
            disabled={this.props.gameStatus === false ? false : true}
            key={el} 
            name={'gameType'}
            onClick={(e)=>{this.handleInputs(e, el)}}  
            aria-pressed="true"
            onMouseDown={(e)=>{e.preventDefault()}}
            className={this.props.gameType === el ? 'btn btn-primary mt-1' :'btn btn-secondary mt-1'}> 
            {el}</button>})



    return (
    <div>
    <div className='d-flex flex-column justify-content-center justify-content-between mb-4'>
        {gameTypeView}
    </div>

        <span>Base time (min)</span>
        <input 
        disabled={this.props.gameStatus === false ? false : true}
        className='w-75'
        onChange={(e)=>{this.handleInputs(e)}} 
        type='number'
        name='time'
        value={this.props.time}
        />
        <span>Increment (sec)</span>
        <input 
        disabled={this.props.gameStatus === false ? false : true}
        className='w-75 mb-4'
        onChange={(e)=>{this.handleInputs(e)}}  
        value={this.props.increment}
        type='number'
        name='increment'
        />
        
        <div className={this.props.gameType === 'Comp vs Comp' ? 'd-none': 'd-block mb-4'}>
        
        <span>
            Your color:
        </span><br/>

        <button 
        disabled={this.props.gameStatus === false ? false : true}
        onClick={(e)=>{this.handleInputs(e, 'white')}}
        name='color' 
        onMouseDown={(e)=>{e.preventDefault()}}
        className={this.props.color === 'white' ? 'btn btn-primary ml-1' : 'btn  btn-secondary ml-1'} 
        >
        white
        </button>
        <button 
        disabled={this.props.gameStatus === false ? false : true}
        onClick={(e)=>{this.handleInputs(e, 'black')}}
        onMouseDown={(e)=>{e.preventDefault()}}
        className={this.props.color === 'black' ? 'btn btn-primary ml-1' : 'btn  btn-secondary ml-1'}
        name='color' 
        >
        black
        </button>
        </div>
    <div className='mb-4'>
    <span>Stockfish level</span><br/>
        <select
        disabled={this.props.gameStatus === false ? false : true}
        onChange={(e)=>{this.handleInputs(e)}}
        name="stockfishLevel"
        value={this.props.stockfishLevel}
        >
        <option value='20'>20</option>
        <option value='20'>15</option>
        <option value='20'>10</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
        </select>
    </div>

    <div className={this.props.gameType === 'Man vs Comp' ? 'd-none': this.props.gameType === 'Man vs Man' ? 'd-none' :'d-block mb-4'}>
        <span>Stockfish 2 level</span><br/>
        <select
        disabled={this.props.gameStatus === false ? false : true}
        onChange={(e)=>{this.handleInputs(e)}}
        name="stockfishLevel"
        value={this.props.stockfishLevel2}
        >
        <option value='20'>20</option>
        <option value='15'>15</option>
        <option value='10'>10</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
        </select>        
    </div>


    <div className='mb-4'>
    <span>Display Score Оценка Stockfish</span><br/>

    <button 
    disabled={this.props.gameStatus === false ? false : true}
    name='displayScore'
    onMouseDown={(e)=>{e.preventDefault()}}
    onClick={(e)=>{this.handleInputs(e, true)}}
    className={this.props.displayScore === true ? 'btn btn-primary ml-1' :'btn btn-secondary ml-1'}
    > Yes
    </button>
    <button 
    disabled={this.props.gameStatus === false ? false : true}
    name='displayScore' 
    onMouseDown={(e)=>{e.preventDefault()}}
    onClick={(e)=>{this.handleInputs(e, false)}}
    className={this.props.displayScore === false ? 'btn ml-1 btn-primary' :'btn btn-secondary ml-1'}
    > No
    </button>

    </div>
        <button 
        disabled={this.props.gameStatus === false ? false : true}
        className='btn btn-primary mt-1 mb-1'
        onMouseDown={(e)=>{e.preventDefault()}}
        onClick={()=>{this.newGame()}}
        >Start game</button>
        <p
        className={this.props.gameStatus === true ? 'd-none': 'd-block'}
        ><b>Pick your options and Start game</b></p>
        
        <p className={this.props.gameStatus === false ? 'd-none': 'd-block'}
        ><span><b>{this.props.engine}</b></span><br/>
        <span><b>{this.props.book}</b></span></p>
        

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
    stockfishLevel2: state.gameOpt.stockfishLevel2,
    displayScore: state.gameOpt.displayScore,

    gameStatus: state.gameStatus.gameStatus,
    engine: state.gameStatus.engineStatus,
    book: state.gameStatus.bookStatus,

    }
  }


export default  connect(mapStateToProps)(GameMenu);
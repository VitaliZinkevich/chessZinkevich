//import {fromJS, toJS} from 'immutable'
import {USER_GAME_OPT_INPUTS} from '../actions/gameOptActons'

let initState = {
    
    gameType: 'Man vs Stockfish',
    time: 1,
    increment: 0,
    color: 'white',
    stockfishLevel: 20,
    displayScore: true,
    
}



const gameOptReducer = (state = initState, action) => {
    let newState = {...state}

    switch (action.type) {
        case USER_GAME_OPT_INPUTS:{
            if (action.event.target.name === 'gameType'){
                newState.gameType = action.opt
            }

            if (action.event.target.name === 'time' ){
                newState.time = action.event.target.value
            }
            
            if (action.event.target.name === 'increment' ){
                newState.increment = action.event.target.value
            }

            if (action.event.target.name === 'color' ){
                newState.color = action.opt
            }

            if (action.event.target.name === 'stockfishLevel' ){
                newState.stockfishLevel = action.event.target.value
            }
            if (action.event.target.name === 'displayScore' ){
                newState.displayScore = action.opt
            }

            return newState
        }

        

            
    
        default:
        return newState
    }

}

export default gameOptReducer


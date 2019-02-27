//import {fromJS, toJS} from 'immutable'
import {GAME_STATUS_ACTION} from '../actions/gameStatusAction'
import {SCORE} from '../actions/gameStatusAction'
import {PGN} from '../actions/gameStatusAction'
import {ENGINE_BOOK_STATUS} from '../actions/gameStatusAction'

let initState = {
    
   gameStatus: false,
   turn: 'white',
   score: null,
   gamePGN: '',
   gameWon: 'NO',
   engineStatus:null,
   bookStatus:null,
   search:null
}



const gameStatusReducer = (state = initState, action) => {
    let newState = {...state}

    switch (action.type) {
        case GAME_STATUS_ACTION:{
           
            if (newState.gameStatus === false ){
                newState.gameStatus = true
            } else {
                newState.gameStatus = false
                newState.score = null
            }
        
            return newState
        }

        case SCORE:{
           
            newState.score = action.score
            if (action.score === '#') {
                newState.gameWon = action.won

            }
            return newState

        } 

        case PGN:{

            newState.gamePGN = action.pgn
            return newState

        }  
        case ENGINE_BOOK_STATUS:{

            newState.engineStatus= action.engine
            newState.bookStatus =action.book
            newState.searchStatus =action.search


            return newState

        }      
    
        default:
        return newState
    }

}

export default gameStatusReducer


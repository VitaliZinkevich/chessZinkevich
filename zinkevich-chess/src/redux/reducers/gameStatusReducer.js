//import {fromJS, toJS} from 'immutable'
import {USER_GAME_OPT_INPUTS} from '../actions/gameOptActons'
import {SCORE} from '../actions/gameStatusAction'

let initState = {
    
   gameStatus: false,
   turn: 'white',
   score: null,
    
}



const gameStatusReducer = (state = initState, action) => {
    let newState = {...state}

    switch (action.type) {
        case USER_GAME_OPT_INPUTS:{
            // console.log(action.opt)
            // console.log(action.event)

            if (action.opt !== null){
                newState.gameType = action.opt
            }
        
            return newState
        }

        case SCORE:{
            // console.log(action.opt)
            // console.log(action.event)
            newState.score = action.score
            
            return newState

        }    
    
        default:
        return newState
    }

}

export default gameStatusReducer


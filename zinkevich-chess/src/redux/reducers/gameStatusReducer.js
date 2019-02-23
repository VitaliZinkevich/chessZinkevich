//import {fromJS, toJS} from 'immutable'
import {USER_GAME_OPT_INPUTS} from '../actions/gameOptActons'

let initState = {
    
   gameStatus: false,
   turn: 'white'
    
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

            
    
        default:
        return newState
    }

}

export default gameStatusReducer


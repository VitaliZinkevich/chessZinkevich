// редюсеры
import gameOptReducer from './gameOptReducer'
import gameStatusReducer from './gameStatusReducer'


import { combineReducers } from 'redux';

let combinedReducer=combineReducers({

    gameOpt: gameOptReducer,
    gameStatus: gameStatusReducer
    
});

export default combinedReducer;
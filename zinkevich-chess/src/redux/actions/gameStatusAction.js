const GAME_STATUS_ACTION='GAME_STATUS_ACTION';
const userGameOptInputsAction =function() {
  return {
    type: GAME_STATUS_ACTION,
    };
}

const SCORE='SCORE';
const scoreAction =function(score) {
  return {
    type: SCORE,
    score
    };
}


export {userGameOptInputsAction,
        GAME_STATUS_ACTION,
        SCORE,
        scoreAction
      }
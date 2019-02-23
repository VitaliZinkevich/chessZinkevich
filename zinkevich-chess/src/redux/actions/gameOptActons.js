const USER_GAME_OPT_INPUTS='USER_GAME_OPT_INPUTS';

const userGameOptInputsAction =function(event, opt) {
  return {
    type: USER_GAME_OPT_INPUTS,
    event,
    opt
  };
}

export {userGameOptInputsAction,
        USER_GAME_OPT_INPUTS}
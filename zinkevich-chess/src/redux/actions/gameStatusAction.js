const GAME_STATUS_ACTION='GAME_STATUS_ACTION';
const gameStatusAction =function() {
  return {
    type: GAME_STATUS_ACTION,
    };
}

const SCORE='SCORE';
const scoreAction =function(score, won=null) {
  return {
    type: SCORE,
    score,
    won
    };
}

const PGN='PGN';
const pgnAction =function(pgn) {
  return {
    type: PGN,
    pgn
    };
}

const ENGINE_BOOK_STATUS='ENGINE_BOOK_STATUS';
const engineBookStatusAction =function(engine, book, search) {
  return {
    type: ENGINE_BOOK_STATUS,
    engine,
    book,
    search
    };
}


export {gameStatusAction,
        GAME_STATUS_ACTION,
        SCORE,
        scoreAction,
        PGN,
        pgnAction,
        ENGINE_BOOK_STATUS,
        engineBookStatusAction
      }
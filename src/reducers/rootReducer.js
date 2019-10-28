import {gameStatusReducer} from "./gameStatusReducer";
import {snakeReducer} from "./snakeReducer";
import {combineReducers} from 'redux-immutable';
import {foodReducer} from "./foodReducer";


export const rootReducer = combineReducers({
    snake: snakeReducer,
    gameStatus: gameStatusReducer,
    foodCell : foodReducer

});

//     gameStatus: gameStatusReducer,

import {gameStatusReducer} from "./gameStatusReducer";
import {combineReducers} from 'redux-immutable';
import {tableObjectsReducer} from "./tableObjects";



export const rootReducer = combineReducers({
    tableObjects: tableObjectsReducer,
    gameStatus: gameStatusReducer,
});



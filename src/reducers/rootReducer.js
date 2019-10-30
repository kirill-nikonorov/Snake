import {gameStatusReducer} from './gameStatusReducer';
import {combineReducers} from 'redux-immutable';
import {tableObjectsReducer} from './tableObjects/tableObjectsreducer';
import {scoreReducer} from './scoreReducer';
import {Map} from 'immutable';

export const rootReducer = combineReducers({
    tableObjects: tableObjectsReducer,
    gameStatus: gameStatusReducer,
    score: scoreReducer
});

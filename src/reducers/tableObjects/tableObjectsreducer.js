import {combineReducers} from 'redux-immutable';

import {Map} from 'immutable';

import {foodReducer} from './foodReducer';
import {snakeReducer} from './snakeReducer';
import {handleActions} from 'redux-actions';
import {incrementScore} from '../../lib/redux-actions/score';

export const tableObjectsReducer = combineReducers({
    snake: snakeReducer,
    foodCell: foodReducer
});

import {combineReducers} from 'redux-immutable';

import {foodReducer} from './foodReducer';
import {snakeReducer} from './snakeReducer';

export const tableObjectsReducer = combineReducers({
    snake: snakeReducer,
    foodCell: foodReducer
});

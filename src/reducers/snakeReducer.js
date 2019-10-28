import {handleActions} from 'redux-actions';

import {INITIAL_SNAKE_CELLS} from "../constants/figures";
import {Map, fromJS, toJS} from 'immutable';


import {DIRECTIONS} from "../constants/common";
import {updateSnake} from "../lib/redux-actions/snake";

const {RIGHT} = DIRECTIONS;

const initialSnake = fromJS({
    cells: [...INITIAL_SNAKE_CELLS],
    direction: RIGHT
});

export const snakeReducer = handleActions({
        [updateSnake]: (state, {payload}) => {
            return state.merge(payload);
        }
    },
    initialSnake);






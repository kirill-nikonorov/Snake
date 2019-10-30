import {fromJS} from 'immutable';
import {INITIAL_SNAKE_CELLS} from '../../constants/figures';

import {handleActions} from 'redux-actions';
import {resetSnake, updateSnake} from '../../lib/redux-actions/snake';

import {DIRECTIONS} from '../../constants/common';

const {RIGHT} = DIRECTIONS;
const initialSnake = fromJS({
    cells: [...INITIAL_SNAKE_CELLS],
    direction: RIGHT
});

export const snakeReducer = handleActions(
    {
        [updateSnake]: (state, {payload}) => {
            return state.merge(payload);
        },
        [resetSnake]: () => {
            return initialSnake;
        }

    },
    initialSnake
);

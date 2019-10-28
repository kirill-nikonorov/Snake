import {handleActions} from 'redux-actions';

import {INITIAL_SNAKE_CELLS} from "../constants/figures";
import {Map, fromJS, toJS} from 'immutable';


import {DIRECTIONS} from "../constants/common";
import {updateSnake, changeSnakeDirection} from "../lib/redux-actions/snake";
import {createFoodCell} from "../actions/food";

const {RIGHT, LEFT, UP, DOWN} = DIRECTIONS;


export const foodReducer = handleActions({
        ["a"]: (state, {payload}) => {
            return state.set("cells", payload);
        },
        ["ss"]: (state, {payload}) => {
            return state.set("direction", payload)
        }
    },
    createFoodCell());






import {Map, fromJS, toJS} from 'immutable';
import {INITIAL_SNAKE_CELLS} from "../constants/figures";
import {DIRECTIONS} from "../constants/common";
import {createFoodCell} from "../actions/food";
import handleActions from "redux-actions/es/handleActions";
import {updateTableObjects} from "../lib/redux-actions/tableObjects";

const {RIGHT} = DIRECTIONS;


const initialSnake = fromJS({
    cells: [...INITIAL_SNAKE_CELLS],
    direction: RIGHT
});


export const tableObjectsReducer = handleActions({
    [updateTableObjects]: (state, {payload}) => {
        return state.merge(fromJS(payload))
    }
}, Map({snake: initialSnake, foodCell: createFoodCell()}));


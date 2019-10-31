import {handleActions} from 'redux-actions';
import {incrementScore, resetScore} from '../lib/redux-actions/score';

export const scoreReducer = handleActions(
    {
        [incrementScore]: state => {
            state++;
            return state;
        },
        [resetScore]: () => {
            return 0;
        }
    },
    0
);

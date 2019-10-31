import {handleActions} from 'redux-actions';
import {setUpRecord} from '../lib/redux-actions/record';

export const recordReducer = handleActions(
    {
        [setUpRecord]: (state, {payload}) => {
            return payload;
        }
    },
    0
);

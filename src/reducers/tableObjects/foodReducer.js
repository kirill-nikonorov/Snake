import {handleActions} from 'redux-actions';

import {createFoodCell} from '../../utils/foodCreation';
import {resetFoodCell, setUpNewFoodCell} from '../../lib/redux-actions/foodCell';

export const foodReducer = handleActions(
    {
        [setUpNewFoodCell]: (state, {payload}) => {
            return payload;
        },
        [resetFoodCell]: () => {
            return createFoodCell();
        }

    },
    createFoodCell()
    )
;

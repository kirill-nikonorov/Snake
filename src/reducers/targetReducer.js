import {handleActions} from 'redux-actions';
import {movePlatformLeft} from '../lib/redux-actions/platform'
import {centredTargetX,  toppedTargetY} from "../constants/figures";

export const targetReducer = handleActions({

        [movePlatformLeft]: (state) => {
            return state
        }
    },
    { targetX : centredTargetX, targetY: toppedTargetY});






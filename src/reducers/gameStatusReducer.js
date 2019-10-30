import {handleActions} from 'redux-actions';
import {turnOnGame, pauseGame, overGame} from '../lib/redux-actions/gameStatus';
import {GAME_STATUSES} from '../constants/common';

const {GAME_IS_OVER, GAME_IS_TURNED_OFF, GAME_IS_ON_PAUSE, GAME_IS_ON} = GAME_STATUSES;

export const gameStatusReducer = handleActions(
    {
        [turnOnGame]: () => {
            return GAME_IS_ON;
        },
        [pauseGame]: () => {
            return GAME_IS_ON_PAUSE;
        },
        [overGame]: () => {
            return GAME_IS_OVER;
        }
    },
    GAME_IS_TURNED_OFF
);

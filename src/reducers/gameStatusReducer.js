import {handleActions} from 'redux-actions';
import {turnOnGame, pauseGame, overGame} from '../lib/redux-actions/gameStatus'
import {GAME_STATUSES} from "../constants/common";
import {setUpState} from "../lib/redux-actions/state";

const {GAME_IS_OVER, GAME_IS_TURNED_OFF, GAME_IS_ON_PAUSE, GAME_IS_ON} = GAME_STATUSES;

export const gameStatusReducer = handleActions({
        [turnOnGame]: () => {
            console.log("GAME_IS_ON");
            return GAME_IS_ON
        },
        [pauseGame]: () => {
            console.log("pauseGame");
            return GAME_IS_ON_PAUSE
        },
        [overGame]: () => {
            console.log("GAME_IS_OVER");
            return GAME_IS_OVER
        },
        [setUpState]: (state, {payload: {gameStatus}}) => {
            return gameStatus;
        }


    }, GAME_IS_TURNED_OFF)
;



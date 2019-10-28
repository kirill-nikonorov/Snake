import {setUpState} from '../lib/redux-actions/state'
import {
    CELLS_HORIZONTAL_COUNT, GAME_STATUSES,
    PLATFORM_WIDTH_CELLS_COUNT,
} from '../constants/common'
import {checkIsGameOnPause, checkIsGameOn, checkIsTurnedOff} from '../utils/gameStatusCheckers'
import {turnOnGame, pauseGame, overGame} from '../lib/redux-actions/gameStatus'

export const centredPlatformX = Math.round((CELLS_HORIZONTAL_COUNT - PLATFORM_WIDTH_CELLS_COUNT) / 2)
export const centredMissileX = Math.round((CELLS_HORIZONTAL_COUNT) / 2);
export const missileOnPlatformY = 1;

const initialState = {
        platformCoordinate: centredPlatformX,
        missile: {x: centredMissileX, y: missileOnPlatformY},
        gameStatus: GAME_STATUSES.GAME_IS_ON
    }
;

export const startNewGame = () => (dispatch) => {
    dispatch(setUpState(initialState));
};

export const toggleGameOn = () => (dispatch, getState) => {
    const gameStatus = getState().get('gameStatus');
    if (checkIsGameOnPause(gameStatus) || checkIsTurnedOff(gameStatus)) dispatch(turnOnGame());
    else if (checkIsGameOn(gameStatus)) dispatch(pauseGame())

};

export {overGame}
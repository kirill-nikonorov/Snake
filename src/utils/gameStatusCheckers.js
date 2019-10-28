import {GAME_STATUSES} from '../constants/common';

const {GAME_IS_ON, GAME_IS_ON_PAUSE, GAME_IS_OVER, GAME_IS_TURNED_OFF} = GAME_STATUSES;

export const checkIsGameOn = status => status === GAME_IS_ON;
export const checkIsTurnedOff = status => status === GAME_IS_TURNED_OFF;
export const checkIsGameOnPause = status => status === GAME_IS_ON_PAUSE;
export const checkIsGameOver = status => status === GAME_IS_OVER;

export const checkIsGameAlive = status => checkIsGameOn(status) || checkIsGameOnPause(status);

import {checkIsGameOn} from '../utils/gameStatusCheckers';
import {STEP_TIME_MILLISECONDS} from '../constants/common';
import {checkIsDirectionIsAppropriate, pushSnake} from './snake';

let stepTimer;

export const setUpGameTimerIfGameIsOn = () => (dispatch, getState) => {
    const gameStatus = getState().get('gameStatus');

    if (checkIsGameOn(gameStatus)) dispatch(setUpGameTimer());
};

export const cleanGameTimerIfDirectionIsAppropriate = newDirection => (dispatch, getState) => {
    const snakeCells = getState().getIn(['tableObjects', 'snake', 'cells']);
    const direction = getState().getIn(['tableObjects', 'snake', 'direction']);
    const directionIsAppropriate = checkIsDirectionIsAppropriate(
        newDirection,
        direction,
        snakeCells
    );
    if (directionIsAppropriate) dispatch(cleanGameTimer());
};

export const setUpGameTimer = () => dispatch => {
    dispatch(cleanGameTimer());

    stepTimer = setInterval(() => {
        dispatch(pushSnake());
    }, STEP_TIME_MILLISECONDS);
};

export const cleanGameTimer = () => () => {
    if (stepTimer) clearInterval(stepTimer);
};

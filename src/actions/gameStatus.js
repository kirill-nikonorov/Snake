import {checkIsGameOn} from '../utils/gameStatusCheckers';
import {turnOnGame, pauseGame, overGame} from '../lib/redux-actions/gameStatus';
import {batch} from "react-redux";
import {resetSnake} from "../lib/redux-actions/snake";
import {resetFoodCell} from "../lib/redux-actions/foodCell";
import {resetScore} from "../lib/redux-actions/score";

export const startNewGame = () => dispatch => {
    batch(() => {
        dispatch(resetSnake());
        dispatch(resetFoodCell());
        dispatch(resetScore());
        dispatch(turnOnGame());
    });
};

export const toggleGameOn = () => (dispatch, getState) => {
    const gameStatus = getState().get('gameStatus');

    checkIsGameOn(gameStatus) ? dispatch(pauseGame()) : dispatch(turnOnGame())
};

export {overGame};

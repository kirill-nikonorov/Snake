import {changeSnakeDirection, updateSnake} from '../lib/redux-actions/snake'

import {checkIsWithinAllBounds} from "../utils/boundComplianceCheck";

import {Map} from 'immutable'

const {min, abs, floor, ceil} = Math;

import {DIRECTIONS} from "../constants/common";
import {checkIsGameOn} from "../utils/gameStatusCheckers";

const {LEFT, RIGHT, UP, DOWN} = DIRECTIONS;

const oppositeDirections = {
    RIGHT: LEFT,
    LEFT: RIGHT,
    UP: DOWN,
    DOWN: UP
};

export const checkIsDirectionIsAppropriate = (newDirection, oldDirection, cells) => {

    const snakeHasTail = cells.size > 1;
    const oppositeDirection = oppositeDirections[oldDirection];

    /*    console.group();
        console.log("newDirection = ", newDirection);
        console.log("oppositeDirection = ", oppositeDirection);
        console.log("snakeHasTail = ", snakeHasTail);
        console.log("directionIsAppropriate = ", directionIsAppropriate);
        console.groupEnd();*/

    return !(snakeHasTail && (newDirection === oppositeDirection))
};

const getDirectionsChanges = (direction) => {
    let xChange, yChange;
    switch (direction) {
        case (LEFT):
            xChange = -1;
            yChange = 0;
            break;
        case (RIGHT):
            xChange = 1;
            yChange = 0;
            break;
        case (UP):
            xChange = 0;
            yChange = 1;
            break;
        case (DOWN):
            xChange = 0;
            yChange = -1;
            break;
    }
    return {xChange, yChange}
};
const createHead = (x, y, oldHead) => {
    return {}
};
export const pushSnake = (newDirection) => (dispatch, getState) => {

    const gameStatus = getState().get('gameStatus');
    const gameIsOn = checkIsGameOn(gameStatus);

    if (!gameIsOn) return;

    const state = getState();
    const snake = state.get('snake');
    const cells = snake.get("cells");
    const head = cells.first();
    const x = head.get("x");
    const y = head.get("y");
    const foodCell = state.get("foodCell");
    const xFood = foodCell.get("x");
    const yFood = foodCell.get("y");
    let headDirection = snake.get("direction");


    if (newDirection) {
        const directionIsAppropriate = checkIsDirectionIsAppropriate(newDirection, headDirection, cells);

        if (directionIsAppropriate) headDirection = newDirection;
        else return
    }


    const {xChange, yChange} = getDirectionsChanges(headDirection);

    const hypotheticallyNewX = x + xChange;
    const hypotheticallyNewY = y + yChange;


    if (!checkIsWithinAllBounds(hypotheticallyNewX, hypotheticallyNewY)) return;


    const crushedWithFood = xFood === hypotheticallyNewX && yFood === hypotheticallyNewY;

    crushedWithFood && console.log(crushedWithFood);
    const tailHandledCells = crushedWithFood ? cells : cells.pop();


    const newHead = Map({x: hypotheticallyNewX, y: hypotheticallyNewY});

    const newCells = tailHandledCells.unshift(newHead);

    dispatch(updateSnake({cells: newCells, direction:headDirection}));

};


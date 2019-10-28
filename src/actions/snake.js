import {changeSnakeDirection, updateSnake} from '../lib/redux-actions/snake'

import {checkIsWithinAllBounds} from "../utils/boundComplianceCheck";

import {Map} from 'immutable'

import {DIRECTIONS} from "../constants/common";
import {checkIsGameOn} from "../utils/gameStatusCheckers";
import {overGame} from "../lib/redux-actions/gameStatus";
import {updateTableObjects} from "../lib/redux-actions/tableObjects";
import {createFoodCell} from "./food";

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

export const pushSnake = (newDirection) => (dispatch, getState) => {


    const gameStatus = getState().get('gameStatus');
    const gameIsOn = checkIsGameOn(gameStatus);

    if (!gameIsOn) return;
    
    const state = getState();
    const tableObjects = state.get('tableObjects');

    const snake = tableObjects.get('snake');
    const cells = snake.get("cells");
    const head = cells.first();
    const x = head.get("x");
    const y = head.get("y");
    const foodCell = tableObjects.get("foodCell");
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

    if (!checkIsWithinAllBounds(hypotheticallyNewX, hypotheticallyNewY)) {
        dispatch(overGame());
        return;
    }

    const crushedWithFood = xFood === hypotheticallyNewX && yFood === hypotheticallyNewY;

    const foodPart = {};
    if (crushedWithFood) {
        console.log("crushedWithFood");
        foodPart.foodCell = createFoodCell();

    }
    const tailHandledCells = crushedWithFood ? cells : cells.pop();

    const newHead = Map({x: hypotheticallyNewX, y: hypotheticallyNewY});

    const newCells = tailHandledCells.unshift(newHead);

    dispatch(updateTableObjects({
        snake: {cells: newCells, direction: headDirection}, ...foodPart
    }));

};


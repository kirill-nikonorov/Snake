import {Map} from 'immutable';

import {CELLS_HORIZONTAL_COUNT, CELLS_VERTICAL_COUNT, DIRECTIONS} from '../constants/common';
import {checkIsGameOn} from '../utils/gameStatusCheckers';
import {createFoodCell} from '../utils/foodCreation';
import {batch} from 'react-redux';
import {updateSnake} from '../lib/redux-actions/snake';
import {setUpNewFoodCell} from '../lib/redux-actions/foodCell';
import {incrementScore} from '../lib/redux-actions/score';
import {endGame} from './gameStatus';

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

    return !(snakeHasTail && newDirection === oppositeDirection);
};

const getDirectionsChanges = direction => {
    let xChange, yChange;
    switch (direction) {
        case LEFT:
            xChange = -1;
            yChange = 0;
            break;
        case RIGHT:
            xChange = 1;
            yChange = 0;
            break;
        case UP:
            xChange = 0;
            yChange = -1;
            break;
        case DOWN:
            xChange = 0;
            yChange = +1;
            break;
    }
    return {xChange, yChange};
};

export const checkDoesHaveCollisions = (snakeCells, x, y) =>
    snakeCells.some(cell => {
        const xCell = cell.get('x');
        if (xCell !== x) return false;
        const yCell = cell.get('y');
        return yCell === y;
    });

const teleportToOppositeSideIfNeeded = (c, boundIndex) => {
    if (c < 0) return boundIndex - 1;
    if (c > boundIndex - 1) return 0;
    return c;
};

export const pushSnake = newDirection => (dispatch, getState) => {
    const gameStatus = getState().get('gameStatus');
    const gameIsOn = checkIsGameOn(gameStatus);

    if (!gameIsOn) return;

    const state = getState();
    const tableObjects = state.get('tableObjects');

    const snake = tableObjects.get('snake');
    const cells = snake.get('cells');
    const head = cells.first();
    const x = head.get('x');
    const y = head.get('y');
    const foodCell = tableObjects.get('foodCell');
    const xFood = foodCell.get('x');
    const yFood = foodCell.get('y');
    let headDirection = snake.get('direction');

    if (newDirection) {
        const directionIsAppropriate = checkIsDirectionIsAppropriate(
            newDirection,
            headDirection,
            cells
        );

        if (directionIsAppropriate) headDirection = newDirection;
        else return;
    }

    const {xChange, yChange} = getDirectionsChanges(headDirection);

    let hypotheticallyNewX = x + xChange;
    let hypotheticallyNewY = y + yChange;

    hypotheticallyNewX = teleportToOppositeSideIfNeeded(hypotheticallyNewX, CELLS_HORIZONTAL_COUNT);
    hypotheticallyNewY = teleportToOppositeSideIfNeeded(hypotheticallyNewY, CELLS_VERTICAL_COUNT);

    const crushedWithTail = checkDoesHaveCollisions(cells, hypotheticallyNewX, hypotheticallyNewY);

    crushedWithTail && console.log('crushedWithTail');

    if (crushedWithTail) {
        dispatch(endGame());
        return;
    }

    const crushedWithFood = xFood === hypotheticallyNewX && yFood === hypotheticallyNewY;

    const tailHandledCells = crushedWithFood ? cells : cells.pop();

    const newHead = Map({x: hypotheticallyNewX, y: hypotheticallyNewY});

    const newCells = tailHandledCells.unshift(newHead);

    batch(() => {
        dispatch(updateSnake({cells: newCells, direction: headDirection}));
        if (crushedWithFood) {
            dispatch(setUpNewFoodCell(createFoodCell(newCells)));
            dispatch(incrementScore());
        }
    });
};

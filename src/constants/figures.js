import {CELLS_HORIZONTAL_COUNT, CELLS_VERTICAL_COUNT} from './common';

import {List, Map} from 'immutable';

const createFigureCells = (rowCount, columnCount) => {
    return List([]).withMutations(figure => {
        for (let y = 0; y < rowCount; y++) {
            for (let x = 0; x < columnCount; x++) {
                figure.push(Map({x, y}));
            }
        }
    });
};

export const tableBackgroundCells = createFigureCells(CELLS_VERTICAL_COUNT, CELLS_HORIZONTAL_COUNT);

const {round} = Math;
const CENTRED_SNAKE_X = round(CELLS_HORIZONTAL_COUNT / 2);
const CENTRED_SNAKE_Y = round(CELLS_VERTICAL_COUNT / 2);

const SNAKE_FIRST_CELL = {x: CENTRED_SNAKE_X, y: CENTRED_SNAKE_Y};

export const INITIAL_SNAKE_CELLS = [SNAKE_FIRST_CELL];

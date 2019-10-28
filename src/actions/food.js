import {Map} from 'immutable'
import {CELLS_HORIZONTAL_COUNT, CELLS_VERTICAL_COUNT} from "../constants/common";

const {floor, random} = Math;

const getRandomXCoordinate = () => {
    return floor(random() * CELLS_HORIZONTAL_COUNT)
};
const getRandomYCoordinate = () => {
    return floor(random() * CELLS_VERTICAL_COUNT)
};

export const createFoodCell = (snakeCells) => {
    let x = getRandomXCoordinate();
    let y = getRandomYCoordinate();

    if (!!snakeCells) {

    }

    return Map({x, y,})
};


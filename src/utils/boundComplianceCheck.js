import {MISSILE_SIDE_IN_CELLS, CELLS_HORIZONTAL_COUNT, CELLS_VERTICAL_COUNT} from "../constants/common";

export const checkIsWithinBound = (smallIndex, bigIndex) => {
    return smallIndex <= bigIndex;
};
export const checkIsWithinTopBound = index => checkIsWithinBound(index + MISSILE_SIDE_IN_CELLS, CELLS_VERTICAL_COUNT);
export const checkIsWithinLeftBound = index => checkIsWithinBound(0, index);
export const checkIsWithinBottomBound = index => checkIsWithinBound(0, index);
export const checkIsWithinRightBound = index => checkIsWithinBound(index + MISSILE_SIDE_IN_CELLS, CELLS_HORIZONTAL_COUNT);

export const checkIsWithinAllBounds = (cellX, cellY) =>
    checkIsWithinTopBound(cellY) &&
    checkIsWithinBottomBound(cellY) &&
    checkIsWithinRightBound(cellX) &&
    checkIsWithinLeftBound(cellX);

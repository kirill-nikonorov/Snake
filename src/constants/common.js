export const CELL_HEIGHT_PX = 40;
export const CELL_WEIGHT_PX = 40;

export const CELLS_HORIZONTAL_COUNT = 10;
export const CELLS_VERTICAL_COUNT = 10;

export const TABLE_HEIGHT_PX = CELLS_VERTICAL_COUNT * CELL_HEIGHT_PX;
export const TABLE_WIDTH_PX = CELLS_HORIZONTAL_COUNT * CELL_WEIGHT_PX;

export const STEP_TIME_MILLISECONDS = 500;

export const MISSILE_SIDE_IN_CELLS = 1;

export const GAME_STATUSES = {
    GAME_IS_TURNED_OFF: 'GAME_IS_TURNED_OFF',
    GAME_IS_ON: 'GAME_IS_ON',
    GAME_IS_ON_PAUSE: 'GAME_IS_ON_PAUSE',
    GAME_IS_OVER: 'GAME_IS_OVER'
};

export const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
};

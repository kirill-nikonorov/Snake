import React from 'react';
import styled from 'styled-components';
import {CELL_HEIGHT_PX, CELL_WEIGHT_PX} from '../../constants/common';
import {pure} from 'recompose';

const CellView = styled.div.attrs(({x, y}) => ({
    style: {
        left: `${x * CELL_WEIGHT_PX}px`,
        top: `${y * CELL_HEIGHT_PX}px`
    }
}))`
    outline: ${({headed}) => headed && '5px  solid #333'};
    height: ${CELL_HEIGHT_PX}px;
    width: ${CELL_WEIGHT_PX}px;
    border: 1px solid blue;
    background-color: ${({color}) => `${color}` || `#aaa`};
    box-sizing: border-box;
    position: absolute;
`;

export const Cell = pure(CellView);

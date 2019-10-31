import React from 'react';
import styled from 'styled-components';
import {pure} from 'recompose';
import {Cell} from './Cell';

const FigureContainer = styled.div`
    outline: 2px solid #aaa;
    position: absolute;
`;

export const FigureView = ({figureCells, color, headed}) => {
    return (
        <FigureContainer>
            {figureCells.reduce((cellsArray, cell) => {
                const isHead = cellsArray.length === 0;
                const x = cell.get('x');
                const y = cell.get('y');
                cellsArray.push(
                    <Cell x={x} y={y} color={color} headed={headed && isHead} key={`${x} + ${y}`} />
                );
                return cellsArray;
            }, [])}
        </FigureContainer>
    );
};

export const Figure = pure(FigureView);

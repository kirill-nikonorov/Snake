import React from "react";
import styled from 'styled-components'
import {pure} from 'recompose';
import {Cell} from "./Cell";

const FigureContainer = styled.div`
        bottom: 0;
        outline: 2px solid #aaa;
        position: absolute;
        `;

export const FigureView = ({figureCells, color}) => {
    return (
        <FigureContainer>
            {figureCells.reduce((cellsArray, cell) => {
                const x = cell.get('x');
                const y = cell.get('y');
                cellsArray.push(
                    <Cell x={x} y={y} color={color}
                          key={`${x} + ${y}`}>{`${x} + ${y}`}</Cell>
                );
                return cellsArray;
            }, [])}
        </FigureContainer>
    )
};

export const Figure = pure(FigureView);
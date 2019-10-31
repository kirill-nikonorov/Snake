import React from 'react';
import styled from 'styled-components';
import {CELL_HEIGHT_PX, DIRECTIONS, TABLE_WIDTH_PX} from '../../constants/common';

const {LEFT, RIGHT, DOWN, UP} = DIRECTIONS;

const ScorePanelContainer = styled.div`
    height: ${CELL_HEIGHT_PX}px;
    width: ${TABLE_WIDTH_PX}px;
    border: 1px solid black;
    position: absolute;
    bottom: -${25 + CELL_HEIGHT_PX}px;
`;

const ControlButton = styled.button`
    height: ${CELL_HEIGHT_PX}px;
    width: ${CELL_HEIGHT_PX}px;
    top: 0px;
    left: 0;
`;

export const ControlPanelView = props => {
    const {directionKeyDownCB, directionKeyUpCB, toggleGameOn, startNewGame} = props;

    return (
        <ScorePanelContainer>
            <ControlButton
                onMouseDown={() => directionKeyDownCB(LEFT)}
                onMouseUp={() => directionKeyUpCB(LEFT)}>
                Left
            </ControlButton>
            <ControlButton
                onMouseDown={() => directionKeyDownCB(RIGHT)}
                onMouseUp={() => directionKeyUpCB(RIGHT)}>
                Right
            </ControlButton>
            <ControlButton
                onMouseDown={() => directionKeyDownCB(DOWN)}
                onMouseUp={() => directionKeyUpCB(DOWN)}>
                down
            </ControlButton>
            <ControlButton
                onMouseDown={() => directionKeyDownCB(UP)}
                onMouseUp={() => directionKeyUpCB(UP)}>
                up
            </ControlButton>
            <ControlButton onClick={toggleGameOn}>play</ControlButton>
        </ScorePanelContainer>
    );
};

import React from 'react';
import styled from 'styled-components';
import {TABLE_HEIGHT_PX, TABLE_WIDTH_PX} from '../../../constants/common';
import {connect} from 'react-redux';

import {checkIsGameIsTurnedOn} from '../../../utils/gameStatusCheckers';
import {ScorePanel} from './ScorePanel';
import {theSmallestSide} from './style';
import {pure} from 'recompose';

const panelSide = theSmallestSide / 6;

const InfoPanelsContainer = styled.div`
    position: absolute;
    right: 0;
    top: -${25 + panelSide}px;
`;

const InfoPanelsView = ({score, record, gameIsTurnedOn}) => {
    return gameIsTurnedOn ? (
        <InfoPanelsContainer>
            <ScorePanel score={score} label="score" />
            <ScorePanel score={record} label="record" />
        </InfoPanelsContainer>
    ) : (
        ''
    );
};

const mapStateToProps = state => {
    const gameStatus = state.get('gameStatus');
    const score = state.get('score');
    const record = state.get('record');
    return {gameIsTurnedOn: checkIsGameIsTurnedOn(gameStatus), score, record};
};
export const InfoPanels = connect(mapStateToProps)(pure(InfoPanelsView));

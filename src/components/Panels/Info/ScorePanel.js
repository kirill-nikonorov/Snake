import React from 'react';
import styled from 'styled-components';

import {pure} from 'recompose';
import {theSmallestSide} from './style';

const scorePanelSide = theSmallestSide / 6;

const ScorePanelContainer = styled.div`
    display: inline-block;
    margin-left:35px
    height: ${scorePanelSide}px;
    width: ${scorePanelSide}px;
    outline: 1px solid black;
  
    text-align: center;
    font-size: ${scorePanelSide * 0.9}px;
    line-height: ${scorePanelSide}px;
`;

const Label = styled.div`
    outline: 1px solid black;
    height: 40%;
    width: 100%;
    line-height: 100%;
    font-size: 35%;
`;
const Score = styled.div`
    height: 60%;
    width: 100%;
    line-height: 100%;
    font-size: 60%;
`;

const ScorePanelView = ({score, label}) => {
    return (
        <ScorePanelContainer>
            <Label>{label}</Label>
            <Score>{score}</Score>
        </ScorePanelContainer>
    );
};

export const ScorePanel = pure(ScorePanelView);

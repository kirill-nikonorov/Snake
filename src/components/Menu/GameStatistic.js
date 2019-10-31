import {pure} from 'recompose';
import React from 'react';
import {BigSymbols, InfoText, TextCentralizer} from './style';

const GameOverStatisticView = props => {
    const {record = 0, score = 0} = props;
    const difference = record - score;

    return (
        <TextCentralizer>
            <BigSymbols>GameOver</BigSymbols>
            {difference > 0 ? (
                <div>
                    <InfoText>Record : {record}</InfoText>
                    <InfoText>Your score : {score} </InfoText>
                    <InfoText>Difference : {difference} </InfoText>
                </div>
            ) : (
                <div>
                    <InfoText>It is a new Record !</InfoText>
                    <InfoText>{score} </InfoText>
                </div>
            )}
        </TextCentralizer>
    );
};

export const GameOverStatistic = pure(GameOverStatisticView);

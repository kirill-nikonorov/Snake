import React from 'react';
import styled from 'styled-components';
import {CELL_HEIGHT_PX} from '../../constants/common';
import {batch, connect} from 'react-redux';
import {startNewGame, toggleGameOn} from '../../actions/gameStatus';
import {pushSnake} from '../../actions/snake';
import {checkIsGameOn} from '../../utils/gameStatusCheckers';
import {incrementScore} from '../../lib/redux-actions/score';

const ScorePanelContainer = styled.div`
    height: ${CELL_HEIGHT_PX}px;
    width: ${CELL_HEIGHT_PX}px;
    border: 1px solid black;
    position: absolute;
    top: -${25 + CELL_HEIGHT_PX}px;
    text-align: center;
    line-height:${CELL_HEIGHT_PX}px;
    right: 0;
`;

const PauseButton = styled.button`
    position: absolute;
    top: -30px;
    left: 0;
`;

class ScorePanelView extends React.Component {
    render() {
        const {incrementScore, score} = this.props;

        return (
            <ScorePanelContainer>
                {score}
                <PauseButton
                    onClick={() => {
                        batch(() => {
                            incrementScore();

                        });
                    }}>
                    Increm
                </PauseButton>
            </ScorePanelContainer>
        );
    }
}

const mapStateToProps = state => {
    const tableObjects = state.get('tableObjects');
    const gameStatus = state.get('gameStatus');
    const cells = tableObjects.getIn(['snake', 'cells']);
    const direction = tableObjects.getIn(['snake', 'direction']);
    const score = state.get('score');
    return {gameIsOn: checkIsGameOn(gameStatus), cells, direction, score};
};
export const ScorePanel = connect(
    mapStateToProps,
    {
        pushSnake,
        toggleGameOn,
        startNewGame,
        incrementScore
    }
)(ScorePanelView);

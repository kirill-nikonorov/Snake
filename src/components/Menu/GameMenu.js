import React from 'react';

import {connect} from 'react-redux';
import {pure} from 'recompose';

import {Icon} from 'antd';
import {BigSymbols, MenuContainer} from './style';
import {GameOverStatistic} from './GameStatistic';
import {startNewGame, toggleGameOn} from '../../actions/gameStatus';
import {checkIsGameOn, checkIsGameOver, checkIsTurnedOff} from '../../utils/gameStatusCheckers';

const AntIcon = BigSymbols.withComponent(Icon);

class MenuView extends React.Component {
    render() {
        const {
            record,
            score,
            isGameOn,
            toggleGameOn,
            startNewGame,
            isGameTurnedOff,
            isGameOver
        } = this.props;

        return (
            <MenuContainer isVisible={!isGameOn}>
                {isGameOver && <GameOverStatistic record={record} score={score} />}
                {!isGameTurnedOff && <AntIcon type="redo" onClick={startNewGame} />}
                {!isGameOver && <AntIcon type="play-circle" onClick={toggleGameOn} />}
            </MenuContainer>
        );
    }
}

const mapStateToProps = state => {
    const gameStatus = state.get('gameStatus');
    const isGameOn = checkIsGameOn(gameStatus);
    const isGameTurnedOff = checkIsTurnedOff(gameStatus);
    const isGameOver = checkIsGameOver(gameStatus);
    const record = state.get('record');
    const score = state.get('score');
    return {isGameOn, score, isGameTurnedOff, isGameOver, record};
};
export const Menu = connect(
    mapStateToProps,
    {toggleGameOn, startNewGame}
)(pure(MenuView));

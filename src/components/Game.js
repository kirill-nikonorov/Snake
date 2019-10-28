import React from "react";
import styled from 'styled-components'
import {Table} from "./Table";
import {STEP_TIME_MILLISECONDS, TABLE_HEIGHT_PX, TABLE_WIDTH_PX} from "../constants/common";
import {connect} from "react-redux";
import {startNewGame, toggleGameOn} from "../actions/gameStatus";
import {
    checkIsDirectionIsAppropriate, pushSnake
} from "../actions/snake";
import {checkIsGameOn} from "../utils/gameStatusCheckers";
import {connectKeyboardToControlling} from "../utils/keyBoardControl";
import createRepeat from "@avinlab/repeat";
import camelCase from "camelcase/index";

const GameContainer = styled.div`
        height: ${TABLE_HEIGHT_PX}px;
        width:${TABLE_WIDTH_PX}px;
        outline: 5px solid #666;
        position: relative;
        `;

const PauseButton = styled.button`
        position: absolute;
        top: -30px;
        `;

const KikButton = styled.button`
        position: absolute;
        top: -30px;
        left: 70px;
        `;
const AnglePanel = styled.div`
        height: 25px;
        width: 25px;
        border: 1px solid black;
        position: absolute;
        bottom: -40px;
        `;

const generateRepeaterName = direction => {
    return camelCase(`${direction}_Movement`);
};

class GameView extends React.Component {
    componentDidMount() {
        const {
            toggleGameOn,
            startNewGame
        } = this.props;

        connectKeyboardToControlling({
            directionKeyUpCB: this.directionKeyUpCB,
            directionKeyDownCB: this.directionKeyDownCB,
            toggleGameOn,
            startNewGame,
        })
    }

    handleLingeringKeyDown = (direction) => {
        const {pushSnake} = this.props;
        const repeaterName = generateRepeaterName(direction);
        this[repeaterName] = createRepeat({
            action: () => {
                pushSnake(direction);
            },
            delay: 100,
        });

        this[repeaterName].start();
    };


    directionKeyDownCB = (direction) => {
        this.cleanGameTimerIfDirectionIsAppropriate(direction);
        this.handleLingeringKeyDown(direction);
    };

    directionKeyUpCB = direction => {
        const repeaterName = generateRepeaterName(direction);
        let {[repeaterName]: repeater} = this;
        if (repeater) {
            repeater.stop();
            this[repeaterName] = null;
        }
        this.setUpGameTimerIfGameIsOn();

    };

    setUpGameTimerIfGameIsOn = () => {
        const {gameIsOn} = this.props;
        if (gameIsOn) this.setUpGameTimer();
    };

    cleanGameTimerIfDirectionIsAppropriate = (newDirection) => {
        const {cells, direction} = this.props;
        const directionIsAppropriate = checkIsDirectionIsAppropriate(newDirection, direction, cells);
        if (directionIsAppropriate) this.cleanGameTimer();
    };

    setUpGameTimer = () => {
        const {pushSnake} = this.props;

        this.cleanGameTimer();

        this.stepTimer = setInterval(() => {
            pushSnake()
        }, STEP_TIME_MILLISECONDS);
    };
    cleanGameTimer = () => {
        const {stepTimer} = this;
        if (stepTimer) clearInterval(stepTimer);
    };

    UNSAFE_componentWillReceiveProps({gameIsOn: NewGameIsOn}) {
        const {gameIsOn} = this.props;

        if (!gameIsOn && NewGameIsOn) this.setUpGameTimer();
        if (gameIsOn && !NewGameIsOn) this.cleanGameTimer();
    }

    render() {
        const {toggleGameOn, movMissile, angle} = this.props;


        return (
            <GameContainer>
                <PauseButton onClick={toggleGameOn}>Пауза</PauseButton>
                <KikButton onClick={() => movMissile({x: 8.55, y: 4.55})}>Кинуть шар</KikButton>
                <Table/>

                <AnglePanel>{angle}</AnglePanel>

            </GameContainer>
        )
    }
}

const mapStateToProps = (state) => {
    const tableObjects = state.get('tableObjects');
    const gameStatus = state.get('gameStatus');
    const cells = tableObjects.getIn(["snake", 'cells']);
    const direction = tableObjects.getIn(["snake", 'direction']);
    return {gameIsOn: checkIsGameOn(gameStatus), cells, direction}

};
export const Game = connect(mapStateToProps, {
    pushSnake,
    toggleGameOn,
    startNewGame
})(GameView);


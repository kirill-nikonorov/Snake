import camelCase from 'camelcase';
import {DIRECTIONS} from "../constants/common";
import createRepeat from '@avinlab/repeat';

const {RIGHT, LEFT, UP, DOWN} = DIRECTIONS;

const generateRepeaterName = direction => {
    return camelCase(`${direction}_Movement`);
};

export const connectKeyboardToControlling = ({
                                                 pushSnake,
                                                 toggleGameOn,
                                                 startNewGame,
                                             }, {
                                                 setUpGameTimerIfGameIsOn,
                                                 cleanGameTimerIfDirectionIsAppropriate
                                             }) => {
    const repeatersBank = {};


    const handleLingeringKeyDown = direction => {
        const repeaterName = generateRepeaterName(direction);
        repeatersBank[repeaterName] = createRepeat({
            action: () => {
                pushSnake(direction);
            },
            delay: 100,
        });

        repeatersBank[repeaterName].start();
    };


    const directionKeyDownCB = (direction) => {
        cleanGameTimerIfDirectionIsAppropriate(direction);
        handleLingeringKeyDown(direction);
    };

    const directionKeyUpCB = direction => {
        const repeaterName = generateRepeaterName(direction);
        let {[repeaterName]: repeater} = repeatersBank;
        if (repeater) {
            repeater.stop();
            repeatersBank[repeaterName] = null;
        }
        setUpGameTimerIfGameIsOn();

    };

    const listener = new window.keypress.Listener();

    listener.register_many([
        {
            keys: "w",
            on_keydown: () => directionKeyDownCB(UP),
            on_keyup: () => directionKeyUpCB(UP),
            prevent_repeat: true
        },
        {
            keys: 's',
            on_keydown: () => directionKeyDownCB(DOWN),
            on_keyup: () => directionKeyUpCB(DOWN),
            prevent_repeat: true
        },
        {
            keys: 'd',
            on_keydown: () => directionKeyDownCB(RIGHT),
            on_keyup: () => directionKeyUpCB(RIGHT),
            prevent_repeat: true
        },
        {
            keys: 'a',
            on_keydown: () => directionKeyDownCB(LEFT),
            on_keyup: () => directionKeyUpCB(LEFT),
            prevent_repeat: true
        },
        {
            keys: 'space',
            on_keydown: toggleGameOn,
            prevent_repeat: true
        },
        {
            keys: 'r',
            on_keydown: startNewGame,
            prevent_repeat: true
        }
    ]);
}
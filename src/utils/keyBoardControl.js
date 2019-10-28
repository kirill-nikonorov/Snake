import {DIRECTIONS} from "../constants/common";

const {RIGHT, LEFT, UP, DOWN} = DIRECTIONS;


export const connectKeyboardToControlling = ({
                                                 toggleGameOn,
                                                 startNewGame,
                                                 directionKeyUpCB,
                                                 directionKeyDownCB
                                             }) => {

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
};
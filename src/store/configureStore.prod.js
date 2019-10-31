import {createStore, applyMiddleware, compose} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import {fromJS, Map} from 'immutable';

import {rootReducer} from '../reducers/rootReducer';

const persistenceConfig = {
    key: 'snake_game',
    merge: (initialState, persistedState) => {
        return initialState.merge(persistedState);
    },
    slicer: path => state => {
        return Map({[path]: state.get(path)});
    },
    serialize: subset => JSON.stringify(subset.toJS()),
    deserialize: serializedData => fromJS(JSON.parse(serializedData))
};

const enhancer = compose(
    applyMiddleware(thunk),
    persistState('record', persistenceConfig)
);

const configureStore = () => {
    return createStore(rootReducer, Map({}), enhancer);
};

export {configureStore};

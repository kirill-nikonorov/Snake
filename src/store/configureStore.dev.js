import {createStore, applyMiddleware, compose} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import DevTools from '../components/devTools/DevTools';

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
    persistState('record', persistenceConfig),
    DevTools.instrument({maxAge: 30})
);

const configureStore = () => {
    const store = createStore(rootReducer, Map({}), enhancer);

    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            const nextRootReducer = require('../reducers/rootReducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
};

export {configureStore};

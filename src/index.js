import React from "react";
import {render} from "react-dom";
import Root from './components/Root/Root'
import DevTools from './components/devTools/DevTools';


import {createStore, applyMiddleware, compose} from 'redux'
import {Map} from 'immutable'


import {Provider} from 'react-redux';

import {rootReducer} from './reducers/rootReducer'

import thunk from 'redux-thunk';


const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument({maxAge: 30})
);
const store = createStore(rootReducer, Map({}), enhancer);

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root"));


if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        const nextRootReducer = require('./reducers/rootReducer');
        store.replaceReducer(nextRootReducer);
    });
}
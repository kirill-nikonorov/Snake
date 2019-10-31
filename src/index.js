import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root/Root';

import {Provider} from 'react-redux';

import {configureStore} from './store/configureStore';

render(
    <Provider store={configureStore()}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        const nextRootReducer = require('./reducers/rootReducer');
        store.replaceReducer(nextRootReducer);
    });
}

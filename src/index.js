import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';

import {configureStore} from './store/configureStore';
import {Root} from './components/Root/Root';

render(
    <Provider store={configureStore()}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

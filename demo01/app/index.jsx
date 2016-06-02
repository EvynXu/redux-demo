import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './biz/store';

let rootElement = document.getElementById('mainPage');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
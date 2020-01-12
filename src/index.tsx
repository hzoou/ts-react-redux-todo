import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import TodoStore from './stores';

ReactDOM.render(
    <Provider store={TodoStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

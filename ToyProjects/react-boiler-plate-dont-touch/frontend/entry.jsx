import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store.getState;
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
})



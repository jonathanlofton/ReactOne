import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

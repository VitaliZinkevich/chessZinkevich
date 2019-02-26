import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducer from './redux/reducers/reducer'

// import thunk from 'redux-thunk'
// import promise from 'redux-promise-middleware'
// import logger from 'redux-logger'
let store = createStore(combinedReducer, applyMiddleware(/*promise(),thunk,*/));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export {store}
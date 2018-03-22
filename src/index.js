import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import productsReducer from "./reducer/checkout";
import createSagaMiddleware from "redux-saga";
import { checkoutWatcher } from "./saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import registerServiceWorker from './registerServiceWorker';

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    productsReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, createLogger()))
);
sagaMiddleware.run(checkoutWatcher);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
// 8:34
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rootReducer from './reducers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

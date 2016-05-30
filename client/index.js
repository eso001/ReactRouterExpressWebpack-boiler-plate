 import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory } from 'react-router';
import App from './app/components/app';
import reducers from './app/reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//browserHistory means whenever the url updates, react router will interpret everything after that call
//hashHistory is anything after a hash symbol http://www.blog.com/#posts/5
//browser History is what part of the url react cares about

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
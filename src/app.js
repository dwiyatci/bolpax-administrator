/**
 * Created by glenn on 12/02/16.
 */

import './styles';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { DATA_TYPE } from './constants';

import { BolpaxAdministrator } from './components/bolpax-administrator';
import { Login } from './components/login';
import { auth } from './auth';
import { Dashboard } from './components/dashboard';
import { MainContent } from './components/dashboard/main-content';

const { TRANSACTION, ISSUE } = DATA_TYPE;
const [Transactions, Issues] = _.map([TRANSACTION, ISSUE],
  dataType => () => <MainContent dataType={dataType} pollInterval={2000} />
);

function requireAuth(nextState, replace) {
  //if (!auth.isLoggedIn()) {
  //  replace({
  //    pathname: '/login',
  //    state   : { nextPathname: nextState.location.pathname }
  //  });
  //}
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={BolpaxAdministrator}>
      <IndexRedirect to="/dashboard" />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}>
        <IndexRedirect to="/dashboard/transactions" />
        <Route path="/dashboard/transactions" component={Transactions} />
        <Route path="/dashboard/issues" component={Issues} />
      </Route>
    </Route>
  </Router>,
  document.querySelector('#app')
);

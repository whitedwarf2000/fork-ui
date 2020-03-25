import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

import Layout from './layout/Layout';

require('./scss/begin.scss');

const HomePage = loadable(() => import('./pages/HomePage'));
const MusicComponentPage = loadable(() => import('./pages/MusicComponentPage'));
const Dashboard = loadable(() => import('./pages/Dashboard'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ui" component={HomePage} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/document/*" component={Dashboard} />
        <Route path="" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
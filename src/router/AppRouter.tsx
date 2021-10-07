import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../pages/index/Index';

// Containers

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </Router>
);

export default AppRouter;

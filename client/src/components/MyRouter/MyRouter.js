import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default MyRouter;
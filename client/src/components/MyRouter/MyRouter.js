import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Programme from '../Programme/Programme';

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/programme" exact component={Programme}/>
    </Switch>
  );
}

export default MyRouter;
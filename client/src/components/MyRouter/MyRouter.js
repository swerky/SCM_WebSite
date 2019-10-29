import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Programme from '../Programme/Programme';
import NotFound from '../../utils/components/NotFound/NotFound';
import NewMember from '../NewMember/NewMember';

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/programme" exact component={Programme}/>
      <Route path="/devenirmembre" exact component={NewMember}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default MyRouter;
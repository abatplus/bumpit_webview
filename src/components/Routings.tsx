import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BusinessCard from './BusinessCard';

const Routings: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path={'/vcard/:tempGuid'} children={<BusinessCard />} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    </Switch>
  );
};

export default Routings;

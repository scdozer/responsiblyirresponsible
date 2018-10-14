import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/main/main';
import Chapter1 from './components/chapter1/chapter1';
import Chapter2 from './components/chapter2/chapter2';
import Chapter3 from './components/chapter3/chapter3';

export default (
  <Switch>
    <Route component = { Main } path = "/" exact />
    <Route component = { Chapter1 } path = "/chapter1" />
    <Route component = { Chapter2 } path = "/chapter2" />
    <Route component = { Chapter3 } path = "/chapter3" />
  </Switch>
)

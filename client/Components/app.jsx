import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'

let store = createStore(_ => {});

import Landing from './Landing.jsx';
import SignUp1 from './SignUp1.jsx';
import SignUp2 from './SignUp2.jsx';
import SignUp3 from './SignUp3.jsx';

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Displa
class ShoppingList extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/sign-up/1' component={SignUp1}/>
        <Route exact path='/sign-up/2' component={SignUp2}/>
        <Route exact path='/sign-up/3' component={SignUp3}/>
      </Switch>
    );
  }
}

unsubscribe();

module.exports = ShoppingList;
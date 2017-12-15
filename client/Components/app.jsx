import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import onBoardApp from '../Reducers/index.js'

import {
  updateUserName, updatePassword, updateEmail,
  updateFirstName, updateLastName, updateTel,
  updateAddress, updateCity, updateState, updateZip,
  logIn
} from '../Actions/actionCreators.js';

let store = createStore(onBoardApp);
store.dispatcher = (input) => {
  store.dispatch(input);
};

import Landing from './Landing.jsx';
import SignUp1 from './SignUp1.jsx';
import SignUp2 from './SignUp2.jsx';
import SignUp3 from './SignUp3.jsx';

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

class OnBoardApp extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <Landing loggedIn={store.getState().logged_in} />
        )}/>
        <Route exact path='/sign-up/1' render={(props) => (
          <SignUp1 store={store} updateUserName={updateUserName} 
            updatePassword={updatePassword} updateEmail={updateEmail} 
          />
        )}/>
        <Route exact path='/sign-up/2' render={(props) => (
          <SignUp2 store={store} updateFirstName={updateFirstName} 
            updateLastName={updateLastName} updateTel={updateTel} 
          />
        )}/>
        <Route exact path='/sign-up/3' render={(props) => (
          <SignUp3 store={store} updateAddress={updateAddress} 
            updateCity={updateCity} updateState={updateState} 
            updateZip={updateZip} logIn={logIn}
          />
        )}/>
      </Switch>
    );
  }
}

console.log('Initial state:', store.getState());

// // Dispatching random things for some Redux fun
// store.dispatch(updateUserName('Learn about actions'));
// store.dispatch(updatePassword('Learn about reducers'));
// store.dispatch(updateEmail('Learn about store'));
// store.dispatch(updateFirstName(0));



module.exports = OnBoardApp;
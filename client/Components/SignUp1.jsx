import React from 'react';
import { Link } from 'react-router-dom';

const SignUp1 = (props) => (
  <div>
    <input type="text" required placeholder="username" onBlur={(e) => {props.store.dispatcher(props.updateUserName(e.target.value));}}></input>
    <input type="password" required placeholder="password" onBlur={(e) => {props.store.dispatcher(props.updatePassword(e.target.value));}}></input>
    <input type="email" required placeholder="email" onBlur={(e) => {props.store.dispatcher(props.updateEmail(e.target.value));}}></input>
    <button>
      <Link to={`/sign-up/2`}>Save</Link>
    </button>
  </div>
);

module.exports = SignUp1;
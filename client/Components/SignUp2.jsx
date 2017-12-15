import React from 'react';
import { Link } from 'react-router-dom';

const SignUp2 = (props) => (
  <div>
    <input type="text" required placeholder="First Name" onBlur={(e) => {props.store.dispatcher(props.updateFirstName(e.target.value));}}></input>
    <input type="text" required placeholder="Last Name" onBlur={(e) => {props.store.dispatcher(props.updateLastName(e.target.value));}}></input>
    <input type="tel" required placeholder="Phone" onBlur={(e) => {props.store.dispatcher(props.updateTel(e.target.value));}}></input>
    <button>
      <Link to={`/sign-up/3`}>Save</Link>
    </button>
  </div>
);

module.exports = SignUp2;
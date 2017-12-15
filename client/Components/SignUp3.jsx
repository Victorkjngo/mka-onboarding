import React from 'react';
import { Link } from 'react-router-dom';

const SignUp3 = (props) => (
  <div>
    <input type="text" required placeholder="Address" onBlur={(e) => {props.store.dispatcher(props.updateAddress(e.target.value));}}></input>
    <input type="text" required placeholder="City" onBlur={(e) => {props.store.dispatcher(props.updateCity(e.target.value));}}></input>
    <input type="text" required placeholder="State" onBlur={(e) => {props.store.dispatcher(props.updateState(e.target.value));}}></input>
    <input type="text" required placeholder="Zip Code" onBlur={(e) => {props.store.dispatcher(props.updateZip(e.target.value));}}></input>
    <button onClick={_ => props.store.dispatcher(props.logIn())}>
      <Link to={`/`}>Submit</Link>
    </button>
  </div>
);

module.exports = SignUp3;
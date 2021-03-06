import React from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => (
  <div className="landing-page">
    <button>
      {
        props.loggedIn ? "Log-Out" : <Link to={`/sign-up/1`}>Sign-In</Link>
      }
    </button>
  </div>
);

module.exports = Landing;
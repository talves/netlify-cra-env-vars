import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log(`netlify-cra-env-vars v${process.env.REACT_APP_VERSION}`)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Environment Variables in a Create React App on Netlify</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and commit to your repo.
        </p>
        <p>NODE_ENV value is "{process.env.NODE_ENV}"</p>
        <p>CUSTOM_ENV_VAR value is "{process.env.CUSTOM_ENV_VAR}"</p>
        <p>REACT_APP_CUSTOM_ENV_VAR value is "{process.env.REACT_APP_CUSTOM_ENV_VAR}"</p>
        <p>TOML_ENV_VAR value is "{process.env.TOML_ENV_VAR}"</p>
        <p>REACT_APP_TOML_ENV_VAR value is "{process.env.REACT_APP_TOML_ENV_VAR}"</p>
      </div>
    );
  }
}

export default App;

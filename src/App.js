import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import AppComponent1 from './AppComponent1/AppComponent1';
import AppComponent2 from './AppComponent2/AppComponent2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AppComponent1></AppComponent1>
        <AppComponent2></AppComponent2>
      </header>
    </div>
  );
}

export default App;

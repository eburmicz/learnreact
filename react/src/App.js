import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and asdasd to reload.
        </p>
        <Person name='abc' age='12'/>
        <Person name='abasasc' age='15'/>
        <Person name='abgggc' age='13'> <p>This is a child html</p> </Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  // Create state as js objects
  state = {persons:  [
                      { name: 'Max', age: 30 },
                      { name: 'Ed', age: 24 },
                      { name: 'George', age: 60 }, 
                    ]

           }

           switchNameHandler = () => {
             console.log('switchNameHandler triggered')
           }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and asdasd to reload.
        </p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
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
    };
}

export default App;

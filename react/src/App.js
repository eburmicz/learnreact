import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

//  Class based components:

class App extends Component {
  // Create state as js objects
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some state we dont want to touch',
    showPersons: false

  }

  switchNameHandler = (newName) => {
    console.log('switchNameHandler triggered')
    this.setState({
      persons: [
        { id:1, name: newName, age: 30 },
        { id:2, name: 'adasfs', age: 32 },
        { id:3, name: 'Georsdfsfasdge', age: 60 },
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    // Fetch the ndex of the person from the persons array
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      // make a copy of the person
    const person = {...this.state.persons[personIndex]};
    
    // update the person object
    person.name = event.target.value
    
    // make a copy of the persons and replace person
    const persons = [...this.state.persons];
    persons[personIndex] = person
    
    // Update the state
    this.setState({persons: persons})
    
  }

  toggleNameHandler = () => {
    console.log('ToggleNameHandler')
    const doesShow = this.state.showPersons;
    console.log(!doesShow)
    this.setState({ showPersons: !doesShow });
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }




  render() {


    let persons = null;

    if (this.state.showPersons) {
      console.log('Rendering persons')
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    click={() => this.deletePersonHandler(index)} 
                    key={person.id} 
                    name={person.name} 
                    age={person.age} 
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
            })}
        </div>  
      )
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and asdasd to reload.
        </p>
          <button onClick={this.switchNameHandler.bind(this, 'newName = ED')} >Switch Name</button>

          <button onClick={this.toggleNameHandler} >Toggle Name</button>

          {persons}

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

// Functional component:

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
// };

// export default App;



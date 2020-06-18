import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

//  Class based components:

class App extends Component {
  // Create state as js objects
  state = {persons:  [
                      { name: 'Max', age: 30 },
                      { name: 'Ed', age: 24 },
                      { name: 'George', age: 60 }, 
                    ],
                    otherState: 'some state we dont want to touch',
                    showPersons: false

           }

           switchNameHandler = (newName) => {
             console.log('switchNameHandler triggered')
             this.setState({persons:  [
              { name: newName, age: 30 },
              { name: 'adasfs', age: 32 },
              { name: 'Georsdfsfasdge', age: 60 }, 
            ]
            })
           }

           nameChangedHandler = (event) => {

            this.setState({persons:  [
            { name: 'Max', age: 30 },
            { name: event.target.value, age: 32 },
            { name: 'Georsdfsfasdge', age: 60 }, 
          ]
           })
          }

          toggleNameHandler = () => {
            console.log('heres')
            const doesShow = this.state.showPersons;
            console.log(doesShow  )
            this.setState({showPersons: !doesShow});
          }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and asdasd to reload.
        </p>
        <button onClick={this.switchNameHandler.bind(this, 'newName = ED' )} >Switch Name</button>

        <button onClick={this.toggleNameHandler} >Toggle Name</button>

        {this.state.showPersons === true ? 
              <div>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                {/* Pass the switch to through to the component */}
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                changed={this.nameChangedHandler} 
                click={this.switchNameHandler}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>children elements </Person>

              </div> : null

      }

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



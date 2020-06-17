import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

//  Class based components:

// class App extends Component {
//   // Create state as js objects
//   state = {persons:  [
//                       { name: 'Max', age: 30 },
//                       { name: 'Ed', age: 24 },
//                       { name: 'George', age: 60 }, 
//                     ],
//                     otherState: 'some state we dont want to touch'

//            }

//            switchNameHandler = () => {
//              console.log('switchNameHandler triggered')
//              this.setState({persons:  [
//               { name: 'asdad', age: 30 },
//               { name: 'adasfs', age: 32 },
//               { name: 'Georsdfsfasdge', age: 60 }, 
//             ]
// })
//            }

//   render() {
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and asdasd to reload.
//         </p>
//         <button onClick={this.switchNameHandler} >Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>children elements </Person>
    
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     );
//     };
// }

// export default App;

// Functional component:



const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default App;



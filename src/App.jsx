import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx'

// można zamiast bindowania używać arrow func. ale jest to mnie wydajne:
// <button onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch name</button>

class App extends Component {
  state = {
    persons: [
      {name:'Maximilian', age:'17'},
      {name:'Manu', age:'21'},
      {name:'Stephanie', age:'51'},
      {name:'John', age:'23'}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked.');
    this.setState({persons: [
      {name : newName, age : '24'},
      {name : 'Manu', age : '52'},
      {name : 'Stephanie', age : '4'}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name : 'Max', age : '25'},
      {name : event.target.value, age : '22'},
      {name : 'Stephanie', age : '34'}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Max')}>Switch name</button>
        <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}>
          My hobbies: Racing
        </Person>
        <Person
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Steph')}
          changed= {this.nameChangedHandler}>
          My hobbies : Games
        </Person>
        <Person
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age}>
        </Person>
        <Person
          name = "Josh"
          age = "16"/>
      </div>
    );
  }
}

export default App;

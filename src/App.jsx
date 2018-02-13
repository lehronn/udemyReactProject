import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx'

class App extends Component {
  state = {
    persons: [
      {name:'Mateusz', age:'17'},
      {name:'Aleksandra', age:'21'},
      {name:'Iwona', age:'51'},
      {name:'Jerzy', age:'23'}
    ]
  }

  switchNameHandler = (newName, newAge) => {
    // console.log('Was clicked.');
this.setState({persons: [
  {name : newName, age : '24'},
  {name : 'Stephanie', age : '52'},
  {name : 'Ami', age : '4'},
  {name : 'Noe', age : '12'}
]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler()(this, 'Max')}>Switch name</button>
        <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 'Stan')}>
          My hobbies: Racing</Person>
        <Person
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Ron')}>
          My hobbies : Games </Person>
        <Person
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age}
          click = {this.switchNameHandler.bind(this, 'Harry')}>
          My hobbies : Music </Person>
        <Person
          name = "Iwona"
          age = "16"/>
        <Person
          name = "Ludwik"
          age = "125">
          My hobbies : Dance </Person>
      </div>
    );
  }
}

export default App;

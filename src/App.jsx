import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name = "Mateusz" age = "35" />
        <Person name = "Aleksandra" age = "41" />
        <Person name = "Jerzy" age = "25" />
        <Person name = "Iwona" age = "16" />
        <Person name = "Ludwik" age = "125" />
      </div>
    );
  }
}

export default App;

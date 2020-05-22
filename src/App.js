import React from 'react';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
      <h1> Hi I'm React App</h1>
      <p> This is really working!</p>
      <Person name = "PIPPO!"/>
      <Person>IO sono il figlio di Person</Person>
      <Person/>
    </div>
  );
}

export default App;

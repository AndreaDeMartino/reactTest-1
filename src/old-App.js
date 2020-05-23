// Importo anche UseState che permette di aggiornare componenti in modo dinamico e di sostituire il contenuto.

import React, {useState} from 'react';
import './App.css';
import Person from './Person/person';


function App() {
  const [personsState, setPersonsState] = useState({
    
     persons : [
      {
        name: 'Andrea',
        age: 27
      },
      {
        name: 'Francesco',
        age: 33
      },
      {
        name: 'Maria',
        age: 25
      }
    ]
  });


 

  // Variabile con funzione per click button
  const switchName = () => {
    setPersonsState({
      persons : [
        {
          name: 'Mauro',
          age: 27
        },
        {
          name: 'Cicco',
          age: 33
        },
        {
          name: 'Tiffany',
          age: 25
        }
      ]
    });
  }


  return (
    <div className="App">

      <h1> Hi I'm React App</h1>

      {/* Richiamo click button */}
      <button onClick ={switchName}> Switch Name</button>

      <Person name = "PIPPO!"/>
      <Person>IO sono il figlio di Person</Person>

      {/* Inserisco dati sfruttando array di oggetti */}
      <Person name = {personsState.persons[0].name} />
      <Person name = {personsState.persons[1].name} />
    </div>
  );
}

export default App;

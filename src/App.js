// Import anche di Component per gestirlo nella class
import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

// La classe App si estende al componente react "Component", con questo strumento posso utilizzare le proprietà di this che permettono di aggiornare i dati in modo dinamico, React fa un refresh dei cambiamenti in tempo reale.
class App extends Component {
  // Variabili si dichiarano senza var/let/const
  state = {
    persons: [
      {
        nome: 'NOME STATICO 1',
        eta: 27
      },
      {
        nome: 'NOME STATICO 2',
        eta: 25
      }
    ]
  }

  // Funzione per cambiare un nome, per sfruttare this usa sempre le arrow Function =>
  cambiaNome = (name) => {
    console.log('Bottone Clickato');
    // setState permette di modificare il contenuto di una variabile senza sovrascrivere quello che non dichiari.
    this.setState({
      persons: [
        {
          nome: name,
          eta: 27
        },
      ]
    })
  }

  // Render del return del codice jsx
  render() {
    return (
      <div className="App">

        <h1> Hi I'm React App</h1>

        {/* Richiami la funzione con this. e usando .bind puoi gestire il valore del parametro della funzione, in questo caso "NOME DINAMICO BUTTON" */}
        <button onClick={this.cambiaNome.bind(this, 'NOME DINAMICO BUTTON')}>CAMBIA NOME </button>

        {/* Sfrutti le props del file person.js */}
        <Person 
          name = "NOME PADRE!"
          // Posso passare la funzione al person.js in questo modo:
          click = {this.cambiaNome.bind(this, 'NOME DINAMICO H3')}
        />
        <Person name = 'FIGLIO'>IO sono il figlio</Person>

        {/* Con this.state usi le variabili dichiarate con state in precedenza */}
        <Person name = {this.state.persons[0].nome}/>

      </div>
    );
  }
}

export default App;

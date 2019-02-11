import React, { Component } from 'react';
import './App.css';
import Superhero from './superhero.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Marvel API
          </p>
        </header>
        <Superhero></Superhero>
      </div>
    );
  }
}

export default App;

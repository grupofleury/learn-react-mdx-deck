import React, { Component } from 'react';
import logo from './img/gf-react2.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Intensivão de React!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs Oficial
          </a>

          <h1>Conteúdo</h1>
          <p>Aula 1</p>

          <a
            className="App-link"
            href="https://github.com/grupofleury/learn-react-mdx-deck"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs Oficial
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Jesica Ababon - Web Developer          
          </p>
        </header>
        <article className="App-bio">
          <div>Picture</div>
          <div>Bio</div>
        </article>
        <article className="App-apps">
          Apps I've Built
        </article>
        <footer className="App-footer">
          <ul>
          LinkedIn 
          Twitter 
          Github 
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;

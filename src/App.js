import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Business-card">
          <div className="Logo-container">
            <Logo logo={logo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

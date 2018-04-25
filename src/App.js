import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';

const user = {
  firstName: 'Regina Alyssa',
  lastName: 'Esguerra',
  position: 'Full-Stack Developer',
  email: 'reginaalyssa01809@gmail.com',
  mobile: '09176206021',
  github: 'github.com/reginaalyssa01809'
};

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

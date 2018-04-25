import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import WorkInfo from './components/WorkInfo';
import Logo from './components/Logo';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

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
          <div className="Basic-info">
            <Name name={formatName(user)}/>
            <WorkInfo position={user.position}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import emailLogo from './assets/email.png';
import mobileLogo from './assets/phone-call.png';
import githubLogo from './assets/github.png';
import './App.css';
import ContactInfo from './components/ContactInfo';
import Logo from './components/Logo';
import Name from './components/Name';
import WorkInfo from './components/WorkInfo';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Regina Alyssa',
  lastName: 'Esguerra',
  position: 'Full-Stack Developer',
  email: 'reginaalyssa01809@gmail.com',
  mobile: '+63916 123 4567',
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
            <div className="Contact-info">
              <ContactInfo logo={emailLogo} value={user.email} type="E-mail" />
              <ContactInfo logo={githubLogo} value={user.github} type="GitHub" />
              <ContactInfo logo={mobileLogo} value={user.mobile} type="Mobile" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

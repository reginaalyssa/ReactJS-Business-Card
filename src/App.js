import React, { Component } from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';
import ModeButton from './components/ModeButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BusinessCard />
        <ModeButton />
      </div>
    );
  }
}

export default App;

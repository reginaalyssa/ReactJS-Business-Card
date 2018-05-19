import React, { Component } from 'react';
import BusinessCardContainer from './components/businessCard/BusinessCardContainer';
import Navbar from './components/navbar/Navbar';
import './App.css';


class App extends Component {
  

  render() {
    return (
      <div>
        <Navbar />
        <BusinessCardContainer />
      </div>
    );
  }
}

export default App;

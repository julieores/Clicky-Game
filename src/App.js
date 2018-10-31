import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import CardContainer from './components/CardContainer';


import Cards from './components/Cards';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <CardContainer />
        <Cards />


      </div>
    );
  }
}

export default App;
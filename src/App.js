import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
var app = (
  <div>
    <Navbar/>
    <Header/>

  </div>
);
class App extends Component {
  render() {
    return (
      app
    );
  }
}

export default App;

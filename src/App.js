import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
var app = (
  <div>
    <Header/>
    <Navbar/>
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

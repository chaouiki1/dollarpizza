import React, { Component } from 'react';
import Navbar from './components/navbar';
import Pizza from './components/pizza';
import Menu from './components/menu';
import Address from './components/address';
import './App.css';

function App() {
  return(
    <div className="App">
    <Navbar/>
      <Pizza/>
      <Menu/>
      <Address/>
    </div>
  );
}

export default App;

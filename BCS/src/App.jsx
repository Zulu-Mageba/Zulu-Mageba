import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './App.css';
import Product from './components/product';
import Home from './components/home';
import Example from './components/hooks'


const App = () => {
  return(
    <div className="App">
      <Product />
      <Home />
      <Example />
      </div>
  );
};


export default App;

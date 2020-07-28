import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/home'

function App() {
  return (
    <div className="App">
  <Navbar />
  <Home />
    </div>
  );
}

export default App;

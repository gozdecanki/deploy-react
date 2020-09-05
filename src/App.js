import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h4>App Component</h4>
      <User/>
      <Navbar/>
    </div>
  );
}

export default App;

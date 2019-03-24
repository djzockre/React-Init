import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Header from "./components/header";
import Dish, {Flag}  from "./components/dish";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dish/>
        <Flag/>
      </div>
      // <p>Hola mundo 2</p>
    );
  }
}

export default App;

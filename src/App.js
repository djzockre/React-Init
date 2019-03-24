import React, { Component, Fragment } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Header from "./components/header";
import Dish, {Flag}  from "./components/dish";
import Newdish  from "./components/newDish";
import './styles/dish.css';

class App extends Component {

  dish = "tacos";
  dishes = ["Tacos", "Ceviche", "Paella"];




  render() {
    return (
      <div className="App" >
     
        <Header/>
        <Newdish/>
        <Dish name={this.dish} qty="3"/>
        {/* <Flag/> */}
        Yo como {this.dish}

        <ul>
          {
            this.dishes.map((dish, index) =>(
                <li key={index}>{dish}</li>       
              ))
          }
        </ul>
      </div>
      
      // <p>Hola mundo 2</p>
    );
  }
}

export default App;

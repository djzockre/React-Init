import React,{Component, Fragment}  from 'react';
// import { MDBBtn } from "mdbreact";
import { MDBBtn, MDBIcon, MDBBtnFixed, MDBBtnFixedItem } from "mdbreact";
export class Ingrediente extends Component {

    render(){
        // return React.createElement('h4', {},"INGREDIENTE");
        return (
            <Fragment>
                <h4>Ingredientes</h4>
                <h4>Ingredientes</h4>
            </Fragment>
        )
    }


}

export class Flag extends Component {

    render(){
        return(
            <div>
                <h1>Uso de bandera o flag</h1>
                <Ingrediente></Ingrediente>
            </div>
        )
    }


}

class Dish extends Component {

    ingredientes = ["Tortilla", "Carne", "Cebolla"];

    contarIngredientes(){
        return this.ingredientes.length;
    }
    
    render(){
        return(
            <div className="dish" >
                <h1>{this.props.name}</h1>
                <h1>{this.contarIngredientes()}</h1>
                <MDBBtn color="primary" >Platillo A</MDBBtn>
    
            </div>
        )
    }


}

export default Dish;
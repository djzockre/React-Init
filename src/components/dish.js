import React,{Component, Fragment}  from 'react';


export class Ingrediente extends Component {

    render(){
        // return React.createElement('h4', {},"INGREDIENTE");
        return (
            <Fragment>
                <h1>Ingredientes</h1>
                <h1>Ingredientes</h1>
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

    render(){
        return(
            <div>
                <h1>Plantillo</h1>
            </div>
        )
    }


}

export default Dish;
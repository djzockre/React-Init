import React,{Component, Fragment}  from 'react';
// import { MDBBtn } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Newdish extends Component {

    addDish(){

        console.log("Agregar plantillo");
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();

    }
   
    
    render(){
        console.log(this)
        return(
            <div  >
                <MDBContainer >
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.addDish}>
            <p className="h4 text-center mb-4">Agregar plantillo</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Nombre del plantillo
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
            />
            
            <div className="text-center mt-4">
              <MDBBtn color="indigo" onClick={this.addDish}>Agregar</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
            </div>
        )
    }


}

export default Newdish;
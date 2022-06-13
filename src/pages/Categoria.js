import React from "react";
import NavBar from "../componentes/NavBar.js";
import NavBarHeader from "../componentes/NavBarHeader.js";
import Producto from "../componentes/Producto.js";
import '../stylesheet/index.css';

function Productos() {
    return (
      <div className="App">
          
            <NavBarHeader />
          
          <div className="container-navbar-producto">
            <div className="row">
              <div className="col">
                 <NavBar /> 
              </div>
              <div className="col">
                <Producto />
              </div>
              <div className="col">
                <Producto />
              </div>
              <div className="col">
                <Producto />
              </div>
            </div>

          </div>
           
      </div>
    );
  }
  
  export default Productos;
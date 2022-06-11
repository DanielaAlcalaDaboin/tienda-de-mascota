import React from "react";
import NavBarHeader from "../componentes/navNavegacion/NavBarHeader.js";
import '../stylesheet/index.css';

function Inicio() {
    return (
      <div className="container-inicio">
        <NavBarHeader />        
       
        <h1>Página de inicio </h1>
      </div>
    );
  }
  
  export default Inicio;
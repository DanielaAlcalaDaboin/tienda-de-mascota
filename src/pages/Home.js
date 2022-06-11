import React from "react";
import  LogoTienda  from "../componentes/logo";
import '../stylesheet/index.css';
function Inicio() {
    return (
      <div className="container-inicio">
        <LogoTienda />
        <h1>Página de inicio </h1>
      </div>
    );
  }
  
  export default Inicio;
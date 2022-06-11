import React from 'react';
import '../stylesheet/index.css';

function LogoTienda() {
  return (
    <div className="logo-tienda-mascota">
      <img
        className="img-tienda-mascota"
        src={require("../img/tiendaMascota.png")}
        alt="Logo de Burger Queen"
        
      />
    </div>
  );
}

export default LogoTienda;
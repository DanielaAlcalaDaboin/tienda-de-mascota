import React from "react";
// import { Link } from "react-router-dom";

import LogoTienda from "./Logo";
import bolsaCompra from "../img/bolsaCompra.png";
// const image = require("../img/bolsaCompra.png").default;
function NavBarHeader() {
  return (
    <div> 
        <nav className="navbar">
            <div className="container-fluid">
                 <LogoTienda />           
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn btn-outline-success" type="submit"><img src={bolsaCompra} alt="bolsa de compra" height="30px" /></button>
                </form>            
            </div>
        </nav>
    
    </div>
  );
}

export default NavBarHeader;
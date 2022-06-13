import React from "react";
import Contador from "./Contador.js";
import carritoCompras from "../img/carritoCompras.png"
import "../stylesheet/index.css";

function Producto() {
    return(
        <div className="container-productos">
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
              <div className="col-sm-auto ">
                <div className="card shadow-sm ">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                      <h4 className="card-title">Nombre del prodructo</h4>
                      <p className="card-text">Precio: </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Contador />
                        <button className="btn btn-outline-success" type="submit" ><img className="shoppingCar" src={carritoCompras} alt="Carrito de Compra" /></button>
                        </div>
                      </div>
                   </div>
                  </div>
             {/* </div> */}

            </div>
        </div>
    );
  }
  export default Producto;
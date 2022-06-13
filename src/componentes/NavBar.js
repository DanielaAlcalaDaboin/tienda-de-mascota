import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/index.css";

function NavBar() {
  return (
    <div className="navbarLateral">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container-title">
          <a href="#" class="navbar-brand  align-items-center">
            <strong>Categorías</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbarOption">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 5
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 6
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 7
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categoria">
                  Categoría 8
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <ul className="nav flex-column">

    //     <li className="nav-item">
    //       <Link className="nav-link" to="/Categoria">
    //         Categoría 1
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/Categoria">
    //         Categoría 2
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/Categoria">
    //         Categoría 3
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/Categoria">
    //         Categoría 4
    //       </Link>
    //     </li>

    //   </ul>
    // </div>
  );
}

export default NavBar;

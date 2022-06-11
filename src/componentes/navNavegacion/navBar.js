import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
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
        
      </ul>
    </div>
  );
}

export default NavBar;

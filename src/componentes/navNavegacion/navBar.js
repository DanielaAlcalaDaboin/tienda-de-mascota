import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Categoria">
            Categoría
          </Link>
        </li>
        
      </ul>
    </div>
  );
}

export default NavBar;

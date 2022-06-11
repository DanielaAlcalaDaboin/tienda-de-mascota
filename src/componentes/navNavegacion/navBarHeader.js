import React from "react";

function NavBarHeader() {
  return (
    <div> 
        <nav className="navbar bg-light">
            <div className="container-fluid">
                
                <form class="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  );
}

export default NavBarHeader;
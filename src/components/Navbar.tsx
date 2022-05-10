import React from 'react'
import {
    Routes,
    Route,
    Link,
    Outlet,
    Navigate
} from "react-router-dom";



export const  Navbar = () => {
    
    return ( 
        <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateColumns: "1fr 2fr"}}>
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
              <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink" >
              <li><a className="dropdown-item active" href="#" aria-current="page">Overview</a></li>
              <li><a className="dropdown-item" href="#">Inventory</a></li>
              <li><a className="dropdown-item" href="#">Customers</a></li>
              <li><a className="dropdown-item" href="#">Products</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Reports</a></li>
              <li><a className="dropdown-item" href="#">Analytics</a></li>
            </ul>
          </div>
    
          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
            </form>
    
            <div className="flex-shrink-0 dropdown">
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
              </a>
              <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </header>
    )
}

export default Navbar
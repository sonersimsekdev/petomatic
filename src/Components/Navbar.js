import React from 'react'
import { Link, Outlet } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Ninth navbar example">
        <div className="container-xl">
          <Link className="nav-link text-black" aria-current="page"  to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="bird">Bird</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="dog">Dog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cat">Cat</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="fish">Fish</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline-secondary ">Login</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
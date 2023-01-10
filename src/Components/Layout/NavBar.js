import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
   <NavLink className="navbar-brand" to="#">Information</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
       <NavLink className="nav-link" to="/about">About</NavLink>
       <NavLink className="nav-link" to="/contact">Contact</NavLink>
       <NavLink className="nav-link" to="/user/add">ADD PERSON</NavLink>
       <NavLink className="nav-link" to="/user/show">SHOW PERSON</NavLink>

    <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar;
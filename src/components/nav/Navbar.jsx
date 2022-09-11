import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>BookStoreApp</h4>
          </Link>
          <div className="d-flex  align-items-center ">
            <>
              <button className="ms-2 ">
                <NavLink to="/login">Login</NavLink>
              </button>
              <button className="ms-2 ">
                <NavLink to="/register">Register</NavLink>
              </button>
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

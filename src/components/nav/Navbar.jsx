import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UseBooksContext } from "../../context/AutContext";
import { logOut } from "../../auth/firebase";

const Navbar = () => {
  const { currentUser } = UseBooksContext();

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <h4>BookStoreApp</h4>
          </Link>

          <div className="d-flex  align-items-center ">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize" style={{ color: "white" }}>
                  {currentUser.displayName}
                </h5>
                <button
                  className="ms-2 btn btn-outline-light"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className=" btns ms-2 ">
                  <NavLink to="/login">Login</NavLink>
                </button>
                <button className="btns ms-2 ">
                  <NavLink to="/register">Register</NavLink>
                </button>
                <button className="btns ms-2 ">
                  <NavLink to="/contact">Contact Me</NavLink>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

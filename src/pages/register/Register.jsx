import React from "react";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="d-flex justify-content-center">
          <div className="register-form">
            <h1 className="form-title display-3 ">JOİN US</h1>
            <form id="register">
              <div className="colm mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name.."
                  required
                />
              </div>
              <div className="colm mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name.."
                  required
                />
              </div>
              <div className="colm mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email adress.."
                  required
                />
              </div>
              <div className="colm mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password.."
                  required
                />
              </div>
              <input
                type="submit"
                className="btn btn-secondary form-control"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

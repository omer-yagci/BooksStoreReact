import React, { useState } from "react";
import registerImage from "../../assests/registerImage.jpg";
import bookIcon from "../../assests/booksIconpng.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn } from "../../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-6 text-black text-center"
            style={{ backgroundColor: "#f3f3f3" }}
          >
            <div className="px-5 ms-xl-4">
              <span className="h1 fw-bold mb-0">
                <img style={{ width: "10rem" }} src={bookIcon} alt="ıcon" />
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }} onSubmit={handleLogin}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: 1 }}
                >
                  Log in
                </h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Email..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <p className="small mb-2 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?
                  <Link to="/register" className="link-info">
                    Register here
                  </Link>
                </p>
                <button>Continie with Google</button>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={registerImage}
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <nav className="navbar fixed-top p-2 navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="mx-auto">
          <Link className="navbar-brand fw-bold" to="/">
            My-App
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 fw-bold" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated && (
                <Link className="nav-link fs-5 fw-bold" to="/services">
                  {user.name}
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="d-flex">
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="btn btn-danger fw-bold"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="btn btn-primary fw-bold"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

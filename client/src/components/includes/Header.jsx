import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info saif">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fa fa-user-circle"></i> Asad Mukhtar
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#asad"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="asad">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fa fa-info-circle"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  <i className="fa fa-list"></i> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <i className="fa fa-handshake-o"></i> Contact
                </Link>
              </li>

              <li className="nav-item m-1">
                <div className="btn-group">
                  <button type="button" className="btn btn-danger btn-md">
                    <i className="fa fa-user-circle"></i> Account
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-md dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  to="/cart"
                  className="btn btn-sm btn-outline-danger mt-2 position-relative"
                >
                  <i className="fa fa-shopping-cart"></i> Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    3
                    <span className="visually-hidden">items in cart</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

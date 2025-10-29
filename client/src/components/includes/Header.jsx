import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkAuthStatus();

    // Listen for storage changes (in case of logout from other tabs)
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Update state
    setIsLoggedIn(false);
    setUser(null);
    
    // Redirect to home page
    navigate('/');
    
    // Optional: Call logout API to invalidate token on server
    // fetch('http://127.0.0.1:8000/api/logout', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //     'Accept': 'application/json',
    //   }
    // });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info saif">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fa fa-user-circle"></i> 
            {user ? user.name : "Asad Mukhtar"}
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

              {/* Dynamic Account Dropdown */}
              <li className="nav-item m-1">
                <div className="btn-group">
                  <button type="button" className="btn btn-danger btn-md">
                    <i className="fa fa-user-circle"></i> 
                    {isLoggedIn ? (user?.name || 'Account') : 'Account'}
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
                    {isLoggedIn ? (
                      // Show when user is logged in
                      <>
                        <li>
                          <Link className="dropdown-item" to="/home">
                            <i className="fa fa-tachometer me-2"></i> Home
                          </Link>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <button 
                            className="dropdown-item text-danger" 
                            onClick={handleLogout}
                          >
                            <i className="fa fa-sign-out me-2"></i>Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      // Show when user is not logged in
                      <>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            <i className="fa fa-sign-in me-2"></i>Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/register">
                            <i className="fa fa-user-plus me-2"></i>Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </li>

              {/* Cart with dynamic badge count */}
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="btn btn-sm btn-outline-danger mt-2 position-relative"
                >
                  <i className="fa fa-shopping-cart"></i> Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {isLoggedIn ? '3' : '0'}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                </Link>
              </li>

              {/* Additional navigation for logged-in users */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <i className="fa fa-dashboard"></i> App
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
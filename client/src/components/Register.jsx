import React from "react";

export default function Register() {
  return (
    <div className="container register-container d-flex justify-content-center align-items-center py-5">
      <div className="card register-card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-info">
            <i className="fa fa-user-plus"></i> Create an Account
          </h3>
          <p className="text-muted">Join YourShop and start shopping now!</p>
        </div>

        {/* Register Form */}
        <form>
          <div className="mb-3 position-relative">
            <i className="fa fa-user form-icon"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-envelope form-icon"></i>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-lock form-icon"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-lock form-icon"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-info">
              <i className="fa fa-user-plus"></i> Register
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-info">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

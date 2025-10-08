import React from "react";

export default function Login() {
  return (
    <div className="container login-container d-flex justify-content-center align-items-center py-5">
      <div className="card login-card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-info">
            <i className="fa fa-user-circle"></i> Login to Asad Mukhtar
          </h3>
          <p className="text-muted">Welcome back! Please login to your account.</p>
        </div>

        {/* Login Form */}
        <form>
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

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="/" className="text-info small">
              Forgot password?
            </a>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-info">
              <i className="fa fa-sign-in"></i> Login
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <a href="/register" className="text-info">
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

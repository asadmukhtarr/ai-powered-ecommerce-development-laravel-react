import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear field-specific error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ""
      });
    }
    
    // Clear general error when user makes changes
    if (error) {
      setError("");
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setFieldErrors({});
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        // Success - save token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        setMessage("✅ Login successful! Redirecting...");
        
        // Redirect to home page after 1 second
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        
      } else {
        // Handle validation errors from Laravel
        if (data.errors) {
          const errors = data.errors;
          
          // Set field-specific errors
          const newFieldErrors = {};
          Object.keys(errors).forEach(field => {
            newFieldErrors[field] = errors[field][0];
          });
          setFieldErrors(newFieldErrors);
          
          // Set general error message
          const firstError = Object.values(errors)[0][0];
          setError(firstError);
        } else if (data.message) {
          setError(data.message);
        } else {
          setError("Login failed. Please try again.");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container login-container d-flex justify-content-center align-items-center py-5">
      <div className="card login-card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-info">
            <i className="fa fa-user-circle"></i> Login to Your Account
          </h3>
          <p className="text-muted">Welcome back! Please login to your account.</p>
        </div>

        {/* Success Alert */}
        {message && (
          <div className="alert alert-success alert-dismissible fade show">
            <i className="fa fa-check-circle me-2"></i>
            {message}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setMessage("")}
            ></button>
          </div>
        )}
        
        {/* Error Alert */}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show">
            <i className="fa fa-exclamation-triangle me-2"></i>
            {error}
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setError("")}
            ></button>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <div className="position-relative">
              <i className="fa fa-envelope form-icon"></i>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ps-5 ${fieldErrors.email ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            {fieldErrors.email && (
              <div className="invalid-feedback d-block">
                <i className="fa fa-exclamation-circle me-1"></i>
                {fieldErrors.email}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="position-relative">
              <i className="fa fa-lock form-icon"></i>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ps-5 ${fieldErrors.password ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            {fieldErrors.password && (
              <div className="invalid-feedback d-block">
                <i className="fa fa-exclamation-circle me-1"></i>
                {fieldErrors.password}
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                disabled={isLoading}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-info small">
              Forgot password?
            </a>
          </div>

          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-info btn-lg"
              disabled={isLoading || !formData.email || !formData.password}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Logging in...
                </>
              ) : (
                <>
                  <i className="fa fa-sign-in me-2"></i> Login
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <a href="/register" className="text-info text-decoration-none">
              <strong>Register now</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
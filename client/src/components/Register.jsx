import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

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
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Registration response:", data);

      if (response.ok) {
        // Success - save Sanctum token
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        setMessage("✅ Registered successfully! Redirecting...");
        setFormData({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        });
        
        // Redirect to dashboard or home page after 2 seconds
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
        
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
          setError("Registration failed. Please try again.");
        }
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Check if form is valid
  const isFormValid = formData.name && 
                     formData.email && 
                     formData.password && 
                     formData.password_confirmation &&
                     formData.password === formData.password_confirmation;

  return (
    <div className="container register-container d-flex justify-content-center align-items-center py-5">
      <div
        className="card register-card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-info">
            <i className="fa fa-user-plus"></i> Create an Account
          </h3>
          <p className="text-muted">Join YourShop and start shopping now!</p>
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
        
        {/* General Error Alert */}
        {error && !Object.keys(fieldErrors).length && (
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

        {/* Register Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <div className="position-relative">
              <i className="fa fa-user form-icon"></i>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ps-5 ${fieldErrors.name ? 'is-invalid' : ''}`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            {fieldErrors.name && (
              <div className="invalid-feedback d-block">
                <i className="fa fa-exclamation-circle me-1"></i>
                {fieldErrors.name}
              </div>
            )}
          </div>

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
            {fieldErrors.email && fieldErrors.email.includes("already been taken") && (
              <div className="mt-2">
                <a href="/login" className="text-info text-decoration-none">
                  <i className="fa fa-sign-in me-1"></i>
                  Login instead?
                </a>
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                minLength="8"
              />
            </div>
            {fieldErrors.password && (
              <div className="invalid-feedback d-block">
                <i className="fa fa-exclamation-circle me-1"></i>
                {fieldErrors.password}
              </div>
            )}
            <div className="form-text">Password must be at least 8 characters long.</div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
            <div className="position-relative">
              <i className="fa fa-lock form-icon"></i>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className={`form-control ps-5 ${fieldErrors.password_confirmation ? 'is-invalid' : ''}`}
                placeholder="Confirm your password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            {fieldErrors.password_confirmation && (
              <div className="invalid-feedback d-block">
                <i className="fa fa-exclamation-circle me-1"></i>
                {fieldErrors.password_confirmation}
              </div>
            )}
            {formData.password !== formData.password_confirmation && formData.password_confirmation && (
              <div className="text-danger small mt-1">
                <i className="fa fa-exclamation-circle me-1"></i>
                Passwords do not match
              </div>
            )}
          </div>

          <div className="d-grid">
            <button 
              type="submit" 
              className="btn btn-info btn-lg"
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Registering...
                </>
              ) : (
                <>
                  <i className="fa fa-user-plus me-2"></i> 
                  Create Account
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-info text-decoration-none">
              <strong>Login here</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
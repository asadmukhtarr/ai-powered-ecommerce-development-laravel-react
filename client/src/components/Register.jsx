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

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Success — save Sanctum token
        localStorage.setItem("token", data.token);
        setMessage("✅ Registered successfully!");
      } else if (data.errors) {
        // 🧾 Show first validation error from Laravel
        const firstError = Object.values(data.errors)[0][0];
        setError(firstError);
      } else {
        setError("Something went wrong. Try again!");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

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

        {/* Alerts */}
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative">
            <i className="fa fa-user form-icon"></i>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-envelope form-icon"></i>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-lock form-icon"></i>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="fa fa-lock form-icon"></i>
            <input
              type="password"
              name="password_confirmation"
              className="form-control"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleChange}
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

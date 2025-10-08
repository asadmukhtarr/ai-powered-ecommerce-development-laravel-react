import React from "react";

export default function Checkout() {
  return (
    <>
      {/* Header */}
      <section className="text-center py-5 bg-info text-white">
        <div className="container">
          <h1 className="fw-bold">
            <i className="fa fa-credit-card"></i> Checkout
          </h1>
          <p className="lead">Complete your purchase securely</p>
        </div>
      </section>

      {/* Checkout Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Billing & Shipping Form */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-info p-4">
              <h4 className="text-info mb-4">
                <i className="fa fa-user"></i> Billing Information
              </h4>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3 position-relative">
                    <i className="fa fa-user form-icon"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3 position-relative">
                    <i className="fa fa-envelope form-icon"></i>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 position-relative">
                  <i className="fa fa-phone form-icon"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3 position-relative">
                  <i className="fa fa-map-marker form-icon"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shipping Address"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3 position-relative">
                    <i className="fa fa-building form-icon"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3 position-relative">
                    <i className="fa fa-globe form-icon"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>

                <h5 className="text-info mt-4">
                  <i className="fa fa-credit-card"></i> Payment Method
                </h5>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="cod">
                    <i className="fa fa-money"></i> Cash on Delivery
                  </label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="card"
                  />
                  <label className="form-check-label" htmlFor="card">
                    <i className="fa fa-cc-visa"></i> Debit/Credit Card
                  </label>
                </div>

                <div className="mt-4 d-grid">
                  <button type="submit" className="btn btn-info btn-lg">
                    <i className="fa fa-check"></i> Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card checkout-summary shadow-sm border-info">
              <div className="card-body">
                <h5 className="card-title text-info">
                  <i className="fa fa-list"></i> Order Summary
                </h5>

                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>iPhone 13 Pro Max</span>
                    <span>PKR 245,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Wireless Headphones</span>
                    <span>PKR 24,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Subtotal</strong>
                    <strong>PKR 269,000</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>PKR 1,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between text-info fw-bold">
                    <span>Total</span>
                    <span>PKR 270,000</span>
                  </li>
                </ul>

                <a href="/cart" className="btn btn-outline-info w-100">
                  <i className="fa fa-arrow-left"></i> Back to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

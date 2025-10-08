import React from "react";

export default function Cart() {
  return (
    <>
      {/* Header */}
      <section className="text-center py-5 bg-info text-white">
        <div className="container">
          <h1 className="fw-bold">
            <i className="fa fa-shopping-cart"></i> Your Cart
          </h1>
          <p className="lead">Review your selected items before checkout</p>
        </div>
      </section>

      {/* Cart Table */}
      <div className="container py-5">
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="cart-header">
                  <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Item 1 */}
                  <tr>
                    <td>
                      <img
                        src="https://picsum.photos/60?random=1"
                        alt="Product"
                        className="product-img"
                      />
                    </td>
                    <td>iPhone 13 Pro Max</td>
                    <td>PKR 245,000</td>
                    <td>
                      <input
                        type="number"
                        className="form-control quantity-input"
                        defaultValue="1"
                        min="1"
                      />
                    </td>
                    <td>PKR 245,000</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                  {/* Item 2 */}
                  <tr>
                    <td>
                      <img
                        src="https://picsum.photos/60?random=2"
                        alt="Product"
                        className="product-img"
                      />
                    </td>
                    <td>Wireless Headphones</td>
                    <td>PKR 12,000</td>
                    <td>
                      <input
                        type="number"
                        className="form-control quantity-input"
                        defaultValue="2"
                        min="1"
                      />
                    </td>
                    <td>PKR 24,000</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <a href="/products" className="btn btn-outline-info">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </a>
          </div>

          {/* Summary */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card cart-summary shadow-sm border-info">
              <div className="card-body">
                <h5 className="card-title text-info">
                  <i className="fa fa-calculator"></i> Cart Summary
                </h5>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>PKR 269,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>PKR 1,000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold text-info">
                    <span>Total</span>
                    <span>PKR 270,000</span>
                  </li>
                </ul>
                <a href="/checkout" className="btn btn-info w-100">
                  <i className="fa fa-credit-card"></i> Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="text-center bg-info text-white py-4">
        <div className="container">
          <p className="mb-0">
            <i className="fa fa-smile-o"></i> Your satisfaction is our priority.
            Thanks for shopping with YourShop!
          </p>
        </div>
      </section>
    </>
  );
}

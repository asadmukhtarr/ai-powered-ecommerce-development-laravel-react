import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // 🔐 Sanctum token

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Fetch cart items
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:8000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 401) {
          navigate("/login");
          return;
        }
        return res.json();
      })
      .then((data) => {
        setCartItems(data.cart || []); // depends on your API response
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setLoading(false);
      });
  }, [token, navigate]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 1000 : 0;
  const total = subtotal + shipping;

  if (loading) return <p className="text-center mt-5">Loading cart...</p>;

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
            {cartItems.length === 0 ? (
              <p className="text-center text-muted">Your cart is empty.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="cart-header">
                    <tr>
                      <th>Product</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={`http://localhost:8000/storage/${item.product.image}`}
                            alt={item.product.name}
                            width="60"
                            height="60"
                          />
                        </td>
                        <td>{item.product.name}</td>
                        <td>PKR {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>PKR {item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
                    <span>PKR {subtotal}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>PKR {shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold text-info">
                    <span>Total</span>
                    <span>PKR {total}</span>
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

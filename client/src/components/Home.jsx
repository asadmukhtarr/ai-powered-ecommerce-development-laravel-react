import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalSpent: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (!token) {
        navigate('/login');
        return;
      }

      if (userData) {
        setUser(JSON.parse(userData));
      }
      
      // Simulate loading user stats
      setTimeout(() => {
        setStats({
          totalOrders: 12,
          totalSpent: 2450,
          pendingOrders: 2
        });
        setLoading(false);
      }, 1000);
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-info mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Dashboard Header */}
      <div className="bg-info text-white p-4 shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-0">
                <i className="fa fa-tachometer me-2"></i>Dashboard
              </h2>
              <p className="mb-0">Welcome back, {user?.name}!</p>
            </div>
            <div className="col-md-6 text-end">
              <div className="btn-group">
                <button className="btn btn-outline-light btn-sm">
                  <i className="fa fa-user me-1"></i> Profile
                </button>
                <button className="btn btn-outline-light btn-sm">
                  <i className="fa fa-cog me-1"></i> Settings
                </button>
                <button 
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out me-1"></i> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <section className="py-4">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card border-primary">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <i className="fa fa-shopping-bag fa-2x text-primary"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="card-title mb-0">Total Orders</h5>
                      <h3 className="mb-0">{stats.totalOrders}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <i className="fa fa-dollar fa-2x text-success"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="card-title mb-0">Total Spent</h5>
                      <h3 className="mb-0">${stats.totalSpent}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-warning">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <i className="fa fa-clock-o fa-2x text-warning"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="card-title mb-0">Pending Orders</h5>
                      <h3 className="mb-0">{stats.pendingOrders}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-4 bg-light">
        <div className="container">
          <h4 className="mb-4">
            <i className="fa fa-rocket me-2 text-info"></i>Quick Actions
          </h4>
          <div className="row g-3">
            <div className="col-md-3 col-6">
              <div className="card text-center h-100 hover-shadow">
                <div className="card-body">
                  <i className="fa fa-shopping-cart fa-2x text-primary mb-3"></i>
                  <h6>Shop Now</h6>
                  <small className="text-muted">Browse products</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card text-center h-100 hover-shadow">
                <div className="card-body">
                  <i className="fa fa-history fa-2x text-info mb-3"></i>
                  <h6>Order History</h6>
                  <small className="text-muted">View past orders</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card text-center h-100 hover-shadow">
                <div className="card-body">
                  <i className="fa fa-heart fa-2x text-danger mb-3"></i>
                  <h6>Wishlist</h6>
                  <small className="text-muted">Saved items</small>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card text-center h-100 hover-shadow">
                <div className="card-body">
                  <i className="fa fa-support fa-2x text-warning mb-3"></i>
                  <h6>Support</h6>
                  <small className="text-muted">Get help</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity & Featured Products */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            {/* Recent Activity */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-header bg-white">
                  <h5 className="mb-0">
                    <i className="fa fa-history me-2 text-info"></i>Recent Activity
                  </h5>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center">
                      <i className="fa fa-check-circle text-success me-3"></i>
                      <div>
                        <small>Order #12345 delivered</small>
                        <br />
                        <small className="text-muted">2 days ago</small>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <i className="fa fa-shopping-cart text-primary me-3"></i>
                      <div>
                        <small>New order placed</small>
                        <br />
                        <small className="text-muted">1 week ago</small>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <i className="fa fa-user-plus text-info me-3"></i>
                      <div>
                        <small>Profile updated</small>
                        <br />
                        <small className="text-muted">2 weeks ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-header bg-white">
                  <h5 className="mb-0">
                    <i className="fa fa-star me-2 text-warning"></i>Recommended For You
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[1, 2].map((num) => (
                      <div className="col-6" key={num}>
                        <div className="card h-100">
                          <img
                            src={`https://picsum.photos/150?random=${num}`}
                            className="card-img-top"
                            alt="Product"
                          />
                          <div className="card-body p-2">
                            <small className="fw-bold">Product {num}</small>
                            <br />
                            <small className="text-success">$99.99</small>
                          </div>
                          <div className="card-footer p-2">
                            <button className="btn btn-sm btn-danger w-100">
                              <i className="fa fa-cart-plus"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Shop Section */}
      <section className="py-4 bg-info text-white">
        <div className="container text-center">
          <h3 className="mb-3">
            <i className="fa fa-bolt me-2"></i>Ready to Shop?
          </h3>
          <p className="mb-4">
            Explore our latest collection with exclusive member discounts.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-light shadow-sm">
              <i className="fa fa-mobile me-1 text-info"></i> Electronics
            </button>
            <button className="btn btn-light shadow-sm">
              <i className="fa fa-tshirt me-1 text-info"></i> Fashion
            </button>
            <button className="btn btn-light shadow-sm">
              <i className="fa fa-home me-1 text-info"></i> Home & Garden
            </button>
            <button className="btn btn-danger shadow-sm">
              <i className="fa fa-search me-1"></i> Browse All
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
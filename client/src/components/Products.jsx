import React from "react";

export default function Products() {
  return (
    <>
      {/* Header Section */}
      <section className="text-center py-5 bg-info text-white">
        <div className="container">
          <h1 className="fw-bold">Our Products</h1>
          <p className="lead">Explore the best deals curated just for you!</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-light py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="mb-2">
            <select className="form-select">
              <option defaultValue>Sort by</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mt-2">
            {/* Product Card Example */}
            {[
              {
                name: "iPhone 13 Pro Max",
                price: "PKR 245,000",
                img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Dell XPS 13",
                price: "PKR 175,000",
                img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Apple Watch Series 9",
                price: "PKR 75,000",
                img: "https://source.unsplash.com/300x200/?watch,smartwatch",
              },
              {
                name: "Sony WH-1000XM4",
                price: "PKR 48,000",
                img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
              },
            ].map((p, i) => (
              <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card product-card border-info shadow-sm">
                  <img src={p.img} className="card-img-top" alt={p.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="text-muted">{p.price}</p>
                    <a href="/" className="btn btn-info btn-sm">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center bg-info text-white py-5">
        <div className="container">
          <h2>Can't find what you're looking for?</h2>
          <p>Stay tuned, new products are added every week!</p>
          <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

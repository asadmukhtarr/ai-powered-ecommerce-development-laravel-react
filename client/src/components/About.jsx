import React from "react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold text-info">Welcome to Asad Mukhtar</h1>
          <p className="lead">
            We bring quality, value, and trust to your shopping experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://source.unsplash.com/600x400/?shopping,store"
                className="img-fluid rounded shadow"
                alt="Our Mission"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-info">Our Mission</h2>
              <p>
                At <strong>YourShop</strong>, our mission is to provide a seamless
                online shopping experience with a wide range of products at competitive
                prices. We are committed to quality, affordability, and customer
                satisfaction.
              </p>
              <p>
                With a user-friendly platform and fast delivery, we aim to become your
                go-to eCommerce destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4 text-info">Meet Our Team</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card team-card shadow-sm border-info">
                <img
                  src="https://source.unsplash.com/400x300/?man,profile"
                  className="card-img-top"
                  alt="CEO"
                />
                <div className="card-body">
                  <h5 className="card-title">Asad Mukhtar</h5>
                  <p className="card-text">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card team-card shadow-sm border-info">
                <img
                  src="https://source.unsplash.com/400x300/?woman,profile"
                  className="card-img-top"
                  alt="COO"
                />
                <div className="card-body">
                  <h5 className="card-title">Ayesha Khan</h5>
                  <p className="card-text">Chief Operations Officer</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card team-card shadow-sm border-info">
                <img
                  src="https://source.unsplash.com/400x300/?developer,profile"
                  className="card-img-top"
                  alt="Developer"
                />
                <div className="card-body">
                  <h5 className="card-title">Hamza Ali</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5 bg-info text-white">
        <div className="container">
          <h2 className="mb-3">Ready to Shop With Us?</h2>
          <p className="mb-4">
            Explore thousands of products with exclusive deals and fast delivery.
          </p>
          <a
            href="/products"
            className="btn btn-light btn-lg rounded-pill px-4 shadow"
          >
            Start Shopping
          </a>
        </div>
      </section>
    </>
  );
}

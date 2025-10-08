import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          {/* About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">
              AR Web Store
            </h5>
            <p>
              We offer quality tech gadgets, kitchen tools, kids' items, and
              more at the best prices.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Quick Links</h6>
            <p>
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </p>
            <p>
              <a href="/products" className="text-white text-decoration-none">
                Shop
              </a>
            </p>
            <p>
              <a href="/about" className="text-white text-decoration-none">
                About Us
              </a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">
                Contact
              </a>
            </p>
          </div>

          {/* Help */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Customer Service</h6>
            <p>
              <a href="/" className="text-white text-decoration-none">
                FAQs
              </a>
            </p>
            <p>
              <a href="/" className="text-white text-decoration-none">
                Shipping
              </a>
            </p>
            <p>
              <a href="/" className="text-white text-decoration-none">
                Returns
              </a>
            </p>
            <p>
              <a href="/" className="text-white text-decoration-none">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
            <p>
              <i className="fa fa-home me-2"></i> Lahore, Pakistan
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i> support@arwebstore.com
            </p>
            <p>
              <i className="fa fa-phone me-2"></i> +92 300 1234567
            </p>
            <p>
              <i className="fa fa-clock me-2"></i> Mon - Sat: 10am - 8pm
            </p>
          </div>
        </div>

        <hr className="my-4 text-white" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-white mb-0">
              © 2025 AR Web Store. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <a href="/" className="text-white me-3">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="/" className="text-white me-3">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/" className="text-white me-3">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/" className="text-white">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

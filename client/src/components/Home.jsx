import React from "react";

export default function Home() {
  return (
    <>
      {/* Top Section */}
      <div className="bg-info border border-1 p-5 shadow-lg">
        <h2>
          <i className="fa fa-smile-o"></i> Hello Asad Mukhtar!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
          reprehenderit repellat quas veniam nihil voluptatum ipsum a labore
          modi saepe vero rerum maiores magni, doloribus deserunt, ad reiciendis
          ipsam ut? Non nam tenetur fuga corrupti maiores, asperiores, doloremque
          vel excepturi rem dolorem velit at ad, earum quod quo soluta quis fugiat
          reprehenderit beatae dolorum et voluptates? Et veritatis quam sit
          obcaecati, error placeat enim explicabo excepturi amet id laborum iste,
          voluptate accusantium veniam! Quos tempore illo reiciendis earum dolorum
          nulla. Vero velit vitae quas alias, praesentium eius consequuntur
          eligendi reiciendis iure adipisci, necessitatibus, assumenda doloribus
          numquam sint quam pariatur cupiditate?
        </p>
        <div className="input-group" style={{ maxWidth: "400px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Here What You Want"
          />
          <button className="btn btn-outline-danger" type="button">
            <i className="fa fa-search"></i> Search
          </button>
        </div>
      </div>

      {/* Feature Products Section */}
      <section>
        <div className="p-5">
          <h2>
            <span className="text-info">
              <i className="fa fa-star"></i> Our Feature
            </span>{" "}
            Products
          </h2>
          <hr />
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row mt-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div className="col-lg-3" key={num}>
                      <div className="card shadow-md hover-shadow">
                        <img
                          src={`https://picsum.photos/200?random=${num}`}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <label>
                            <b>Iphone 13 Pro Max</b>
                          </label>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div className="card-footer">
                          <label>
                            <i className="fa fa-money"></i> 1000$
                          </label>
                          <button className="btn btn-sm btn-danger float-end">
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row mt-2">
                  {[5, 6, 7, 8].map((num) => (
                    <div className="col-lg-3" key={num}>
                      <div className="card shadow-md hover-shadow">
                        <img
                          src={`https://picsum.photos/200?random=${num}`}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <label>
                            <b>Iphone 14 Pro</b>
                          </label>
                          <p>Another product description here...</p>
                        </div>
                        <div className="card-footer">
                          <label>
                            <i className="fa fa-money"></i> 1200$
                          </label>
                          <button className="btn btn-sm btn-danger float-end">
                            <i className="fa fa-shopping-cart"></i> Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="bg-info p-5 text-center shadow-lg">
          <h2 className="display-5 fw-bold text-white mb-3">
            <i className="fa fa-shopping-bag me-2"></i>Find it, Love it, Buy it.
            <hr />
          </h2>
          <p className="text-white-50 lead mb-4">
            Discover a wide variety of top-quality products. From gadgets to
            fashion, we have it all. Enjoy seamless shopping, fast delivery, and
            exclusive deals tailored just for you.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/" className="btn btn-danger shadow-sm">
              <i className="fa fa-list me-1"></i> All Products
            </a>
            <a href="/" className="btn btn-outline-light shadow-sm">
              <i className="fa fa-sign-in me-1"></i> Login
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="category">
        <div className="p-5">
          <h2>
            <span className="text-info">
              <i className="fa fa-star"></i> Our Feature
            </span>{" "}
            Categories
          </h2>
          <hr />
          {[1, 2].map((row) => (
            <div className="row g-0" key={row}>
              {[
                {
                  img: "https://i.imgur.com/GKP5Z8N.png",
                  title: "3D Printers",
                },
                {
                  img: "https://i.imgur.com/GvZKyXN.png",
                  title: "Pizza Tools",
                },
                { img: "https://i.imgur.com/H4If0D7.png", title: "SIM Tools" },
                {
                  img: "https://i.imgur.com/BY0rFA6.png",
                  title: "Screen Protectors",
                },
                {
                  img: "https://i.imgur.com/KL2qxKs.png",
                  title: "Casserole Pots",
                },
                { img: "https://i.imgur.com/6QslU7j.png", title: "Toy Boxes" },
              ].map((cat, i) => (
                <div className="col-6 col-md-4 col-lg-2" key={i}>
                  <div className="category-card text-center">
                    <img
                      src={cat.img}
                      className="img-fluid"
                      alt={cat.title}
                    />
                    <div className="card-body py-2">
                      <h6 className="card-title mb-0">{cat.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-info text-white py-5">
        <div className="container text-center">
          <h3 className="mb-3">
            <i className="fa fa-envelope"></i> Subscribe to Our Newsletter
          </h3>
          <p className="mb-4">
            Get updates on latest products, offers, and more directly in your
            inbox.
          </p>
          <form className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-3 col-lg-2 mb-2">
              <button type="submit" className="btn btn-danger btn-lg w-100">
                <i className="fa fa-paper-plane"></i> Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

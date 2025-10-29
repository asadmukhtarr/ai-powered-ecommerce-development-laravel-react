import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token"); // 👈 token saved on login

    if (!token) {
      alert("Please log in to add items to cart!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 👈 Sanctum Auth Header
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await res.json();
      alert("Product added to cart!");
      console.log("Cart response:", data);
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center border-info shadow-sm">
              <img
                src={`http://localhost:8000/storage/${p.image}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="text-muted">PKR {p.price}</p>
                <button
                  onClick={() => handleAddToCart(p.id)}
                  className="btn btn-info btn-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

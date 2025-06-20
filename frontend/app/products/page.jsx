"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name: "", price: "", imageUrl: "" });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    // Validate
    if (!form.name.trim() || !form.price || !form.imageUrl.trim()) {
      setError("All fields are required.");
      return;
    }
    const priceNum = Number(form.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setError("Price must be a positive number.");
      return;
    }
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          price: priceNum,
          imageUrl: form.imageUrl.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to add product.");
        return;
      }
      setForm({ name: "", price: "", imageUrl: "" });
      setMessage("Product added successfully!");
      fetchProducts();
      setTimeout(() => setMessage(null), 2000);
    } catch (err) {
      setError("Failed to add product.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    setError(null);
    setMessage(null);
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) {
        setError("Failed to delete product.");
        return;
      }
      setMessage("Product deleted successfully!");
      fetchProducts();
      setTimeout(() => setMessage(null), 2000);
    } catch (err) {
      setError("Failed to delete product.");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <main>
      <h1>Products</h1>
      <form onSubmit={handleAddProduct} style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: 400,
        margin: "0 auto 2rem auto",
        background: "#fff",
        padding: "1rem 1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
      }}>
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleInputChange}
          style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleInputChange}
          style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleInputChange}
          style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}>Add Product</button>
        {error && <div style={{ color: "#dc2626", marginTop: 4 }}>{error}</div>}
        {message && <div style={{ color: "#16a34a", marginTop: 4 }}>{message}</div>}
      </form>
      <input
        type="text"
        placeholder="Search products by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "0 auto 2rem auto",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          maxWidth: "400px",
          width: "100%"
        }}
      />
      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", width: "100%" }}>No products found.</div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard product={product} href={`/products/${product.id}`} key={product.id} onDelete={() => handleDelete(product.id)} />
          ))
        )}
      </div>
    </main>
  );
}

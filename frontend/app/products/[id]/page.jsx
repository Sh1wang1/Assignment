"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product) return <div className="text-center mt-10">Product not found.</div>;

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto", background: "#fff", borderRadius: "0.75rem", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: "2rem", textAlign: "center" }}>
      <Link href="/products" style={{ display: "inline-block", marginBottom: "1.5rem", color: "#2563eb", textDecoration: "underline" }}>&larr; Back to Products</Link>
      <img src={product.imageUrl} alt={product.name + ' product image'} style={{ width: 240, height: 240, objectFit: "contain", marginBottom: "1.5rem" }} />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{product.name}</h1>
      <p style={{ fontSize: "1.5rem", color: "#16a34a", fontWeight: "bold" }}>₹{product.price}</p>
    </main>
  );
} 
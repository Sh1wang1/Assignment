import Link from "next/link";

export default function ProductCard({ product, href, onDelete }) {
  const card = (
    <div
      className="product-card"
      tabIndex={0}
      style={{ position: "relative", cursor: href ? "pointer" : "default", outline: "none" }}
    >
      {onDelete && (
        <button
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); onDelete(); }}
          aria-label={`Delete ${product.name}`}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 28,
            height: 28,
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          title="Delete product"
        >
          ×
        </button>
      )}
      <img
        src={product.imageUrl}
        alt={product.name + ' product image'}
        style={{ borderRadius: "0.5rem" }}
      />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </div>
  );
  return href ? (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      {card}
    </Link>
  ) : card;
}

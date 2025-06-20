import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8fafc",
      borderRadius: "1.5rem",
      boxShadow: "0 8px 32px rgba(37,99,235,0.10)",
      margin: "2rem auto",
      maxWidth: 900,
      padding: "3rem 2rem"
    }}>
      <h1 style={{
        color: "#222",
        fontSize: "2.8rem",
        fontWeight: 800,
        marginBottom: "1.2rem",
        letterSpacing: "-2px",
        textShadow: "0 2px 8px rgba(0,0,0,0.04)"
      }}>
        Welcome to E-Commerce Store
      </h1>
      <p style={{
        color: "#444",
        fontSize: "1.3rem",
        maxWidth: 600,
        textAlign: "center",
        marginBottom: "2.5rem"
      }}>
        Discover the latest tech gadgets at unbeatable prices. Browse our curated collection of headphones, smartwatches, speakers, and more. Shop with confidence and enjoy a seamless, modern shopping experience.
      </p>
      <Link href="/products">
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "0.7rem",
            padding: "0.9rem 2.2rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s"
          }}
          className="cta-btn"
        >
          View Products
        </button>
      </Link>
    </main>
  );
}

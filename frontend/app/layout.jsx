import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'E-Commerce Products',
  description: 'A modern, responsive product listing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          padding: "0.5rem 0",
          marginBottom: "2rem",
        }}>
          <nav style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>
            <Link href="/" style={{ textDecoration: "none", color: "#222" }}>Home</Link>
            <Link href="/products" style={{ textDecoration: "none", color: "#222" }}>Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

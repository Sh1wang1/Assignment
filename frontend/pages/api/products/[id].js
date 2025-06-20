import { getProducts, setProducts } from "./data";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'DELETE') {
    const products = getProducts();
    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    products.splice(productIndex, 1);
    setProducts(products);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
} 
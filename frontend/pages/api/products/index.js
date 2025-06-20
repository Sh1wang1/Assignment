import { getProducts, setProducts } from "./data";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getProducts());
  } else if (req.method === 'POST') {
    const { name, price, imageUrl } = req.body;
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
    }
    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number.' });
    }
    if (!imageUrl || typeof imageUrl !== 'string' || !imageUrl.trim()) {
      return res.status(400).json({ error: 'ImageUrl is required and must be a non-empty string.' });
    }
    const products = getProducts();
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name: name.trim(),
      price,
      imageUrl: imageUrl.trim(),
    };
    products.push(newProduct);
    setProducts(products);
    res.status(201).json(newProduct);
  } else if (req.method === 'PATCH') {
    const { id, name, price, imageUrl } = req.body;
    if (typeof id !== 'number') {
      return res.status(400).json({ error: 'ID is required and must be a number.' });
    }
    const products = getProducts();
    const product = products.find((p) => p.id === id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    if (name !== undefined) {
      if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ error: 'Name must be a non-empty string.' });
      }
      product.name = name.trim();
    }
    if (price !== undefined) {
      if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Price must be a positive number.' });
      }
      product.price = price;
    }
    if (imageUrl !== undefined) {
      if (typeof imageUrl !== 'string' || !imageUrl.trim()) {
        return res.status(400).json({ error: 'ImageUrl must be a non-empty string.' });
      }
      product.imageUrl = imageUrl.trim();
    }
    setProducts(products);
    res.status(200).json(product);
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 
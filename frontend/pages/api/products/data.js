let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    imageUrl: "https://placehold.co/160x160?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    imageUrl: "https://placehold.co/160x160?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1999,
    imageUrl: "https://placehold.co/160x160?text=Speaker",
  },
];

export function getProducts() {
  return products;
}

export function setProducts(newProducts) {
  products = newProducts;
} 
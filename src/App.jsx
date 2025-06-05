import React, { useState } from 'react'

const initialProducts = [
  { name: 'Keyboard', price: 49.99, inStock: true },
  { name: 'Mouse', price: 19.99, inStock: false },
  { name: 'Monitor', price: 199.99, inStock: true },
  { name: 'USB Hub', price: 29.99, inStock: false },
]

export default function App() {
  const [products, setProducts] = useState(initialProducts)

  function handleRemove(name) {
    setProducts((prev) => prev.filter((p) => p.name !== name))
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      {products.map((product) => (
        <div
          key={product.name}
          className={product.inStock ? 'in-stock' : 'out-of-stock'}
        >
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => handleRemove(product.name)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

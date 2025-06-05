import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { name, price, inStock } = product;

  return (
    <div className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default ProductCard;

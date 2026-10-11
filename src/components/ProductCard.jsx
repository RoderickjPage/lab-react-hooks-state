// ProductCard.jsx - one product with an Add to Cart button.
import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  const className = product.inStock ? styles.card : styles.card + ' ' + styles.outOfStock

  return (
    <div className={className}>
      <h3>{product.name}</h3>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button data-testid={'product-' + product.id} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard

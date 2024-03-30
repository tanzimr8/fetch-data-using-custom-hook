import React from 'react'

const Product = ({product}) => {
  return (
    <>
      <div className="product-discount-percentage">{product.discountPercentage}%</div>
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title}  />
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-buttons">
              <button className="btn btn-cart">Add to cart</button>
            </div>
    </>
  )
}

export default Product

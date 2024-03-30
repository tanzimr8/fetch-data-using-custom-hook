import React from 'react'
import logo from './../../logo.svg'
const Products = () => {
  return (
    <div className='products-container'> 
        <div className="products">
          <div className="product">
            <div className="product-discount-percentage">12.96%</div>
            <div className="product-image">
              <img src={logo} alt="Logo"  />
            </div>
            <div className="product-brand">Pixel</div>
            <div className="product-title">Google Pixel 7 Pro</div>
            <div className="product-price">$999</div>
            <div className="product-buttons">
              <button className="btn btn-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Products

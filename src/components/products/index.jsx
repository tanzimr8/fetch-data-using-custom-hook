import React, { useState } from 'react'
import useFetch from './useFetch';
import Product from './Product';
const Products = () => {
  const {data,loading,err} = useFetch('https://dummyjson.com/products',{});
  const [count,setCount] = useState(3);
  const handleLoadButton = ()=>{
    setCount(count+3);
  }
  if(loading){
    return <h1 className='text-cemter'>Loading...</h1>
  }
  return (
    <div className='products-container'>
      <h1>Latest Products</h1>
      <div className="products">
          {data && data.products && data.products.length ? (
            data.products.slice(0,count).map((product,index)=>{
                return <div key={index} className="product"><Product product={product}/></div>
            })
          ) : err
          }
        </div>
        <button onClick={handleLoadButton} className='btn btn-load'>Load more</button>
      </div>
  )
}

export default Products

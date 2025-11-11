import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from './Products';



function Productview() {
const params = useParams()
const selectedProduct = Product.find((item) => item.id == params.id) 

console.log(selectedProduct)

  return (
    <div>
    <h1>{selectedProduct.name}</h1>
    <p1>{selectedProduct.description}</p1>
    
    </div>
  
  )
}

export default Productview;

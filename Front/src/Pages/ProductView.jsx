import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from './Products';



function Productview() {
const params = useParams()
const selectedProduct = Product.find((item) => item.name === params.name) 

console.log()

  return (
    <div>
    {/* <Productview item={selectedItem} /> */}
    </div>
  
  )
}

export default Productview;

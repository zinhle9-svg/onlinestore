import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


   export  const Product= [
{ id: 1,
   name: 'food',
 image: 'pic',
 price: 2000,
 description: 'different food served',
 quantity: 1
},
{
   id: 2,
 name: 'cars',
 image: 'pic',
 price: 1000,
  description: 'Porsche isnt part of this',
   quantity: 1
}]

// Product.findIndex( () => {
  
// }) 
function Products ({updateCart}){

const navigate = useNavigate()

const handleAddtocart = (selectedItem) => {
  const existingItem = cart.find(item => item.id === selectedItem)}
  if (!existingItem) {
// add new item to the cart
updateCart(prevCart => [
  ...prevCart,
  { ...selectedItem, quantity: 1 }
]);

} else {
  updateCart(prevCart =>
  prevCart.map(item =>
    item.id === selectedItem.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  )
);
}
}

return (
 <div>
  {
   Product.map((item) => {
    return(
     <div>
     <h3>{item.name}</h3>
      <h4>R {item.price}</h4>
      <img src={item.image}></img>
      <div>
      <button onClick={()=> navigate(`/productView/${item.id}`)}>View</button>
      {/* <button onClick={() => navigate(`/ShoppingCart/`)}>Add to cart</button> */}
       <button onClick={() => handleAddtocart()}>
        Add to cart
      </button>
      </div>
      </div>
     
    )
   })        
  }
  </div>
)




export default Products; 


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//find images and import
function view(name) {
    console.log(name)
   
//     const handleViewClick = (item )=> {
//   selectedItem(item);
}

   export  const Product= [
{name: 'food',
 image: 'pic',
 price: 2000,
 description: 'different food served'
},
{
 name: 'cars',
 image: 'pic',
 price: 1000,
  description: 'Porsche isnt part of this'
}]

function Products (){
   const [selectedItem, setSeletedItem] = useState();
const navigate = useNavigate()
return (
 <div>
  {
   Product.map((item) => {
    return(
     <div>git
     <h3>{item.name}</h3>
      <h4>R {item.price}</h4>
      <img src={item.image}></img>
      <div>
      <button onClick={()=> navigate(`/productView/${item.name}`)}>View</button>
      <button className=''>Add to cart</button>
      </div>
      </div>

    )
   })        
  }
 </div>
)
}

export default Products; 


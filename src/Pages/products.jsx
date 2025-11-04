import React from 'react';
import { useNavigate } from 'react-router-dom';

//find images and import
function view(name) {
    console.log(name)
}
   export  const Product= [
{name: 'food',
 image: 'pic',
 price: 'R2000'
},
{
 name: 'cars',
 image: 'pic',
 price: 'R1000'
}]

function Products (){
const navigate = useNavigate()
return (
 <div>
  {
   Product.map((item) => {
    return(
     <div>
     <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <img src={item.image}></img>
      <div>
      <button onClick={()=> navigate(`/productView/${item.name}`)}>View</button>
      <button>Add to cart</button>
      </div>
      </div>

    )
   })        
  }
 </div>
)
}

export default Products; 


import React from 'react';
//find images and import

     const Product= [
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
      <button>View</button>
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


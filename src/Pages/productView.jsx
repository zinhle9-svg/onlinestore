import React from 'react'
import { useParams } from 'react-router-dom';

function Productview() {
 const params = useParams()
console.log(params)
  return (
    <div>
      <h1>This is a Product of {params.name}</h1>
    </div>
  )
}

export default Productview;

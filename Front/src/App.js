import LoginDetails from './Pages/LoginDetails';
import Products from './Pages/Products';
import React from 'react';
import ProductView from './Pages/ProductView';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ShoppingCart from './Pages/ShoppingCart';
import { Product } from './Pages/Products';
import { useState } from 'react';


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
function App() {
  const [cart, setCart] = useState([])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<h1>page not found</h1>} />
      <Route path='/login' element={ <LoginDetails /> } />
      <Route path='/ProductView/:id' element={ <ProductView />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/products' element={ <Products updateCart={setCart} cart={cart} />}  />
      <Route path='/ShoppingCart' element={ <ShoppingCart /> } />
    </Routes>   
  
  )
}

export default App;

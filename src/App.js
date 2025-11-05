import LoginDetails from './Pages/LoginDetails';
import Products from './Pages/Products';
import React from 'react';
import ProductView from './Pages/ProductView';
import { Route, Routes } from 'react-router-dom';

// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })


function App() {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='*' element={<h1>page not found</h1>} />
      <Route path='/login' element={ <LoginDetails /> } />
      <Route path='/ProductView/:name' element={ <ProductView />} />
    
    </Routes>   
  )
}

export default App;

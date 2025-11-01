import LoginDetails from './Pages/LoginDetails';
import Products from './Pages/Products';
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})


function App() {
  return (
    <div>
      <LoginDetails />
      <Products />
    </div>
  )
}

export default App;

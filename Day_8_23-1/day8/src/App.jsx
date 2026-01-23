import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MuiComponents from './MUI/MuiComponents'
import Products from './MUI/product'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mui" element ={<MuiComponents/>}/>
        <Route path="/products" element ={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App

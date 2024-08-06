import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './Pages/Admin/Admin'
import AddProduct from './Components/AddProduct/AddProduct'
import ListProduct from './Components/ListProduct/ListProduct'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Admin/>}>
            <Route path='addproduct' element={<AddProduct/>}/> 
            <Route path='listproduct' element={<ListProduct/>}/>
          
          </Route>
          
        </Routes>
    </div>
  )
}

export default App

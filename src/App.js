import React from 'react'

import MyNav from './componenets/MyNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componenets/Home'
import Store from './componenets/Store'
import About from './componenets/About'
import ShoppingCartContext from './context/ShoppingCartContext'



const App = () => {
  return (
    <>
        <BrowserRouter>
            <ShoppingCartContext>
                <MyNav/>
                  <Routes>
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/store" element={<Store/>}/>
                    <Route  path="/about" element={<About/>} />
                  </Routes>
            </ShoppingCartContext>
        </BrowserRouter>
  
      
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Latout/Navbar'
import Footer from './Latout/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './Latout/Layout'
import Home from './Pages/Home'


function App() {
  

  return (
  
      <div>
        <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          </Route>
        </Routes>


        </div>
   
  )
}

export default App

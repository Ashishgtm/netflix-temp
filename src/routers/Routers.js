<<<<<<< HEAD
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home';
const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home />} />
     

  </Routes>
  </BrowserRouter>
  );
}
=======
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home';
const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home />} />
     

  </Routes>
  </BrowserRouter>
  );
}
>>>>>>> 53f3bfd5d1c63a581b40c85deb5410d6f6b5c551
export default Routers
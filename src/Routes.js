import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Budget from './pages/Budget';
import NotFound from './pages/notFound';


function Routers() {
  return (
    <Routes>
      <Route exact path="/e-social" element={ <Home /> } />
      <Route path="/e-social/sobre" element={ <About /> } />
      <Route path="/e-social/orcamento" element={ <Budget /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default Routers;

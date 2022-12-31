import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Budget from './pages/Budget';


function Routers() {
  return (
    <Routes>
      <Route exact path="/e-social" element={ <Home /> } />
      <Route path="/sobre" element={ <About /> } />
      <Route path="/orcamento" element={ <Budget /> } />
      {/* <Route path="/*" component={ notFound } /> */}
    </Routes>
  )
}

export default Routers;

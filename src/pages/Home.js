import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/e-social/sobre">Sobre</Link>
          <Link to="/e-social/orcamento">Orçamento</Link>
        </nav>
        Home
      </div>
  )
}

export default Home;

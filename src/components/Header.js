import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      Header
      <nav>
          <Link to="/">Home</Link>
          <Link to="/e-social/sobre">Sobre</Link>
          <Link to="/e-social/orcamento">Orçamento</Link>
        </nav>
    </header>
  )
}

export default Header;

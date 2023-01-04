import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className='logo-container' />
      {/* <img src={ logo } alt="loog-silva-e-vieira" className="header-logo" /> */}
      <nav>
        <button className="nav-button">
          <Link to="/e-social">Home</Link>
        </button>
        <button className="nav-button">
          <Link to="/e-social/sobre">Sobre</Link>          
        </button>
        <button className="nav-button">
          <Link to="/e-social/orcamento">Simulação</Link>          
        </button>
      </nav>
    </header>
  )
}

export default Header;

import React from 'react';
import Logo from '../img/fenijutsu.jpeg'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='container-fluid fixed'>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <img 
      className='logo'
      src={Logo}
      />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/apropos">À propos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/actions">Actions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/contact">Contact</Link>
          </li>
         
        </ul>
      </div>
    </nav>
        </div>
        <hr style={{color:'red'}}/>
    </div>
    
  );
}

export default Header;

import React from 'react'
import logo from '../img/fenijutsu.jpeg'

function Footer() {
  return (
    <footer className='bg-light py-5'>
      <div className='container'>
        <div className='row'>
            <div className='col'>
                <img src={logo} className='logo'/>
            </div>
            <div className='col'>
                <h2 className='text-danger'>Contact</h2>
                <h4>+227 9X XX XX XX</h4>
                <h4>contact@fenijutsu.ne</h4>
            </div>
            <div className='col text-center'>
            <h2 className='text-danger'>Lien rapide</h2>
            <h4>Acceil</h4>
            <h4>A propos</h4>
            <h4>Actions</h4>
            <h4>Contact</h4>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

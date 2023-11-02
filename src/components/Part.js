import React from 'react'
import maas from '../img/maas.jpeg'
import jjif from '../img/jjif.png'
import jjafu from '../img/jjafu.jpeg'

function Part() {
  return (
    <div className='container text-center mt-5'>
        <h1 className='text-danger'>Reconue par</h1>
      <div className='row mt-5'>
        <div className='col'>
            <img 
            className='part'
            src={maas}
            />
        </div>
        <div className='col'>
            <img 
            className='part'
            src={jjif}
            />
        </div>
        <div className='col'>
            <img 
            className='part'
            src={jjafu}
            />
        </div>
      </div>
    </div>
  )
}

export default Part

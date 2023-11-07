import React from 'react'
import duo from '../img/duo.jpg'
import fight from '../img/fight.jpg'
import ne from '../img/newaza.webp'






function Cards() {
  return (
    <div className='container'>
     <div className='row'>
    <div className='col my-4'>
<div className="card bg-dark" style={{width: '18rem'}} >
  <img src={fight} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className='card-title text-danger'>Fighting systeme</h5>
    <p className="card-text text-light">Le fighting est l'affontrement avec des règles très strictes de deux jujitsukas. Ces règles ont été mises en place pour éviter les blessures des combattants.

Ce type de compétition n'est actuellement pratiqué qu'au niveau internationnal. La France est d'ailleurs très bonne dans ces compétitions. De plus en plus d'open de jujitsu propose ce type de compétition.</p>
  </div>
</div>
    </div>
    <div className='col my-4'>
<div className="card bg-dark" style={{width: '18rem'}} >
  <img src={duo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className='card-title text-danger'>Duo systeme</h5>
    <p className="card-text text-light">Le Duo System est une discipline dans laquelle deux jutsukas d'une même équipe montrent des techniques d'auto-défense possibles contre une série de 12 attaques, appelées au hasard par l'arbitre du tapis pour couvrir les scénarios suivants : attaque de préhension (ou strangulation), attaque d'étreinte. (ou collier), l'attaque avec coup de poing (coup de poing ou coup de pied) et l'attaque armée (bâton ou couteau).</p>
  </div>
</div>
    </div>
    <div className='col my-4'>
<div className="card bg-dark" style={{width: '18rem'}} >
  <img src={ne} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className='card-title text-danger'>Ne-waza</h5>
    <p className="card-text text-light">Le Jiu-Jitsu brésilien est une modification du Jiu-Jitsu et se concentre sur la transition de la position debout au combat au sol et au sol. Les entraînements et les compétitions peuvent se dérouler en Gi ou sans Gi en pantalon et chemise de sport (No-Gi). La discipline de compétition associée s'appelle Ne-Waza, qui est une discipline relativement nouvelle dans le programme officiel de compétition de la JJIF. </p>
  </div>
</div>
    </div>
     </div>
    </div>
  )
}

export default Cards

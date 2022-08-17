import React from 'react'
import './Navbar.css'


const Navbar = () => {
  const values = ['Characters', 'Location'];
  const alt = 'RickAndMorty';
  const src = 'https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png';


  return (
    <div className='navbar'>
      <ul className='list'>
        <li className='list--data'>
          <p className='list--data__characters' >{ values[0].toUpperCase() }</p>
        </li>
        <li className='list--data'>
          <img className='list--data__imagen' src={ src } alt={ alt } />
        </li>
        <li className='list--data'>
          <p className='list--data__location'  >{ values[1].toUpperCase() }</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
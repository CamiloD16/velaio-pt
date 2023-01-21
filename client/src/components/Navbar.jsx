import React, { useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

  let {logoutUser} = useContext(AuthContext)

  const [clicked, setClicked] = useState('')

  const openAndCloseMenu = () => {
    (clicked === 'active') ? setClicked('') : setClicked('active');
  }

  return (
      <nav className='navbar'>
        <h2>VN</h2>
        <ul>
          <li><Link className='item-nav' to='/'>Noticias</Link> </li>
          <li><Link className='item-nav' to='auditoria'>Auditoria</Link></li>
          <li><Link className='item-nav' onClick={logoutUser} to='/login'>Salir</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
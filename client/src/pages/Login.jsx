import React from 'react'
import Button from '../components/Button'

import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Login = () => {

  let {loginUser} = useContext(AuthContext)

  return (
    <div className='container'>
      <form onSubmit={loginUser} className='login'>
          <h1>Velaio <span>Notice</span> </h1>
          <h4>Usuario</h4>
          <input name="username" type="text" placeholder='Ingresa tu usuario'/>
          <h4>Contraseña</h4>
          <input name="password" type="password" placeholder='Ingresa tu contraseña'/>

          <Button
            type="submit"
            message="Ingresar"
          />

      </form>
    </div>
  )
}

export default Login
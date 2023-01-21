import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

  const navigate = useNavigate()

  const loginUser = async ( e )=> {
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },

      body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
    })

    const data = await response.json()

    if(response.status === 200){
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      navigate('/')
    }else{
      alert('Algo salió mal')
    }
  }

  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
  }

  const updateToken = async () => {

    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'refresh':authTokens?.refresh})
    })

    const data = await response.json()

    if (response.status === 200){
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
      logoutUser()
    }
  }

  useEffect(()=> {

    /* Max active time where the user is not ussing the App. sec to min */
    const timeActive = 1000 * 60 * 10

    const interval =  setInterval(()=> {
      if(authTokens){
        updateToken()
      }
    }, timeActive)
    return ()=> clearInterval(interval)

}, [authTokens])


  const contextData = {
    user:user,
    loginUser:loginUser,
    logoutUser:logoutUser,
  }

  return(
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
}
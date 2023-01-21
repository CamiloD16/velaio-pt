import { HttpStatusCode } from 'axios'
import React from 'react'
import GetApis from '../hooks/GetApis'

const Auditoria = () => {

  const url = "http://127.0.0.1:8000/api/auditoria/auditoria/?format=json"
  const { Data } = GetApis(url)

/*   console.log(user.username)

  console.log(new Date().getDate())
  console.log(new Date().getMonth())
  console.log(new Date().getHours())
  console.log(new Date().getMinutes()) */

  return (
    <div className='auditoria'>
      {Data.map(info => {
        return(
          <div>
            <h3> Usuario: {info.usuario}</h3>
            <h3> Url: {info.url}</h3>
            <h3> Status: {info.status}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Auditoria
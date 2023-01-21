import { useState, useEffect, useContext } from 'react'
import axios from "axios";
import AuthContext from '../context/AuthContext';

const GetApis = (url) => {

  const [Data, setData] = useState([]);

  let { user } = useContext(AuthContext)


  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(url)
          .then(result => {
            setData(result.data)
            console.log(result.request.responseURL)
            console.log(result.request.status)

            const requestRegister = async () => {
              return await fetch("http://127.0.0.1:8000/api/auditoria/auditoria/", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "usuario": String(user.username),
                  "url": result.request.responseURL,
                  "status": result.request.status,
                })
              })
            }
            requestRegister()
          })
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [])

  return {
    Data,
    url
  }
}

export default GetApis
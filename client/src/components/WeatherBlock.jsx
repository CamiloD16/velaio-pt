import React from 'react'
import GetApis from '../hooks/GetApis'

const WeatherBlock = () => {

  const url = "http://api.openweathermap.org/data/2.5/weather?q=cali&lang=es&appid=f62b4de10d24119e0ef2a24f0cea1158"
  const {Data} = GetApis(url)

  return (
    <div className='weatherBlock'>
      {Data.length != 0 ?
         <h3>Clima en Cali: {Data.weather[0].description} con una temperatura de {Math.trunc(Data.main.temp - 273.15)}°C y sensación térmica de {Math.trunc(Data.main.feels_like - 273.15)}°C</h3>
         : <></>
      }
    </div>
  )
}

export default WeatherBlock
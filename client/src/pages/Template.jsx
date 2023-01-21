import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import WeatherBlock from '../components/WeatherBlock';

const Template = () => {
  return (
    <>
      <Navbar />
      <WeatherBlock />
      <Outlet />
    </>
  )
}

export default Template

import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './components/Location';
import Test from './components/Test';
import AuthButtons from './Auth/AuthButtons';
import Activities from './ActivityPage/Activities';
import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();
  async function getWeatherFromSearch(lon, lat) {
    
  }

  return (
    <>
      <AuthButtons />
      <Location />
      <Test />
    </>
  )
}

export default App

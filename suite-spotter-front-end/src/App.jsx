
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './components/Location';
import Test from './components/Test';
import Activities from './ActivityPage/Activities';
import './App.css'

function App() {

  async function getWeatherFromSearch(lon, lat) {
    
  }

  return (
    <>
      <Location />
      <Test />
    </>
  )
}

export default App

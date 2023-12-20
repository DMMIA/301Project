
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyTrips from './components/myTrips/MyTrips';
import About from './components/About';
import Activities from './components/ActivityPage/Activities';
import Homepage from './components/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<MyTrips />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

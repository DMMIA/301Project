
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AuthButtons from './Auth/AuthButtons';

import Location from './components/Location';
import Test from './components/Test';
import AuthButtons from './Auth/AuthButtons';

import Activities from './ActivityPage/Activities';
import { performApiRequest } from './scripts/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [requestResult, setRequestResult] = useState('Requires login');

  async function handleRequestClick() {
    try {
      const accessTokenSilently = await getAccessTokenSilently();
      const response = await performApiRequest('/ping', accessTokenSilently);
      setRequestResult(response);
    } catch (error) {
      setRequestResult(error);
    }
  }
  return (
    <>
      <AuthButtons />
      {isAuthenticated && (
        <div>
          <h2>Profile</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={handleRequestClick}>Ping</button>
      <p>Ping result: {requestResult}</p>
      <Amadeus 

      />
      <Location />
      <Test />
    </>
  )
}

export default App

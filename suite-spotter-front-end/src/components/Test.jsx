import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { performApiRequest } from '../scripts/apiService';


export default function Test(props) {
  const { getAccessTokenSilently } = useAuth0();
  const [buttonState, setButtonState] = useState(false);
  const [marco, setMarco] = useState('');

  const handleButton = async () => {
    try {
      const accessTokenSilently = await getAccessTokenSilently();
      const response = await performApiRequest('/marco', accessTokenSilently);
      setMarco(response);
      setButtonState(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Button variant='primary' onClick={handleButton}>
        Marco
      </Button>
      {setButtonState && (
        <p>{marco}</p>
      )}
    </>
  )
}
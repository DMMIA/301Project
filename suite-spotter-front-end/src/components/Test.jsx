import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Test() {

  const [buttonState, setButtonState] = useState(false);
  const [marco, setMarco] = useState('');

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const handleButton = async () => {
    try {

      // const options = {
      //   headers: { "Authorization": `Bearer ${jwt}` },
      //   method: 'get',
      //   baseURL: import.meta.env.VITE_SERVER_URL,
      //   url: '/test'
      // };
      const response = await axios.get('http://localhost:3001/marco');
      setMarco(response.data);
      setButtonState(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = import.meta.env.VITE_AUTH_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'http://localhost:3001/marco',
            scope: "read:current_user",
          },
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

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
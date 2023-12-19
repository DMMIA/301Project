import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Test() {

  const [button, setButton] = useState(false);
  const [marco, setMarco] = useState('');

  const handleButton = async (e) => {
    try {
      const response = await axios.get('http://localhost:3001/marco');
      setMarco(response.data);
      setButton(true);
      
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      <Button variant='primary' onClick={handleButton}>
        Marco
      </Button>
      {setButton && (
        <p>{marco}</p>
      )}
    </>
  )
}
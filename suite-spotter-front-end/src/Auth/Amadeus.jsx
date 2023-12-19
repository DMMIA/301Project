import { useState, useEffect } from 'react';

export default function Amadeus() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/deus'); // Replace with your actual endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data from Amadeus:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Amadeus Data</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading Amadeus data...</p>
      )}
    </>
  )
}
import axios from 'axios';

export const performApiRequest = async (endpoint, accessToken = null, method = 'get', data = null) => {
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  const config = {
    method,
    headers: headers,
    baseURL: import.meta.env.VITE_SERVER_URL,
    url: endpoint,
    data: data,
  };
  const response = await axios(config);
  return response.data;
};
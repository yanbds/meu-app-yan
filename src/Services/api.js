import axios from 'axios';

async function buscar() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/'
  );
  return response.data;
}

export { buscar };
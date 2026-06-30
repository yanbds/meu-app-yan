import axios from 'axios';

async function buscar() {
  // data já é o objeto JS!
  // sem .json() nem JSON.stringify
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts'
  );
  console.log(data);
}


export { buscar };
import { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <ul>
      {posts.slice(0, 5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

async function BuscarPost() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(data)

}




export { Posts, BuscarPost }
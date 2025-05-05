import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response=>response.json)
          .then(data=>{
              setPost(data)
          })
          .catch((error) => {
              console.log(error);
          })
      })


  return (
    <>
    <ul>
      {post&& post.map((p)=>(<li key={p.id} onClick={()=>navigate('/post/'+p.id)}>{p.id}{p.title}</li>))}
    </ul>
    </>
  )
}

export default Home
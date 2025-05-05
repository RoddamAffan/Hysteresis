import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id}=useParams()
    const [posted,setposted]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response=>response.json)
        .then(data=>{
            setposted(data)
        })
        .then(data=>{
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])
  return (
    <>
    {
        posted && <div>
        <h1>postid:{id}</h1>
        <h1>title:{posted.title}</h1>

        </div>
    }
    
    </>
    
    
  )
}

export default Post
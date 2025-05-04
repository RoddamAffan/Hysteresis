import React from 'react'
import { useState } from 'react'

const Login = () => {

    const[pwd1,setpwd1]=useState('')
    const[pwd2,setpwd2]=useState('')
    const[equal,setEqual]=useState(false)

    function handlePassword1(event){
        setpwd1(event.target.value)
        console.log(event.target.value)
    }
    function handlePassword2(event){
        setpwd2(event.target.value)
        console.log(event.target.value)
        if(pwd1==event.target.value){
            setEqual(true);
        }
        else{
            setEqual(false)
        }
    }

  return (
    <>
            <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" value={pwd1}  onChange={handlePassword1} class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Password</label>
            <input type="password" value={pwd2} onChange={handlePassword2} class="form-control" id="exampleInputPassword2"/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        {!equal && <p>password isnt</p>}
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    
    </>
  )
}

export default Login
import React from "react";


const Signup = () => {

    return (
        <div>
             <div className='loginDiv'>
    
    <div className='border1'>
  <form className='loginForm'>
    <h1>Bookeeper2Go</h1>
    <h2> Sign Up </h2>
        <input  type='text'
        placeholder='Your email'
        name='email'>
        </input>
        <input type='text'
        placeholder='Your username'
        name='username'>
        </input>
        <input type='password'
        placeholder='Your password'
        name='password'>
        </input>
  </form>
  <button className='login'>Login</button>
  </div>
  
</div>
        </div>
    )
}

export default Signup;
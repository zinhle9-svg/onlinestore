import React from 'react'

function Register() {
  return (
    <div>
      <form>
       <h1>Login</h1>
       <div>
      <label>Email address</label>
      <input type="email" required/> 
      </div>
      <div>
      <label>Password</label>
      <input type="password" required minLength={8}/> 
      </div>
      <button> Login</button>
       <button>Signup</button>
      <button> Forgot password</button>
     
      </form>
    </div>
  )
};

export default Register;

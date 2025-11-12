import React from 'react'

function Register() {
  return (
    <div>
      <form>
       <h1>Register</h1>
       <div>
      <label>Name</label>
      <input type="name"  required/> 
      </div>
      <div>
      <label>Surname</label>
      <input type="text" required minLength={3}/> 
      </div>
      <div>
      <label>email</label>
      <input type="email" required/> 
      </div>
      <label>password</label>
      <input type="password" required minLength={8} />
      <div>
         <button>Submit</button>
      </div>
      
      
     
      </form>
    </div>
  )
};

export default Register;

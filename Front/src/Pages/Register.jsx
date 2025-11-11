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
      <input type="text" required minLength={8}/> 
      </div>
      <div>
      <label>Date of birth</label>
      <input type="date" required/> 
      </div>
      <button type="password" required minLength={10}>Create password</button>
       <button>Submit</button>
      
     
      </form>
    </div>
  )
};

export default Register;

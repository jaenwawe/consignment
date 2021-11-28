import { useState } from 'react'
import { useHistory } from 'react-router-dom'




function Login({cartArray, currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password}) {
  const history = useHistory()
  return (
    <div>

    <form  onSubmit={handleLogin}>
        <div className="mb-3" >

            <label className="form-label">Email address
                <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password
                <input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </label>
        </div>
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  
    </div>


  )
}

export default Login;
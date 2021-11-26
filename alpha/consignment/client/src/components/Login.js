import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";



function Login({currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password, order, setOrder }) {
  const history = useHistory()
      
  return (

    <div>
      <h1>Login</h1>
    <form  onSubmit={handleLogin}>
        <div className="mb-3">
            <label className="form-label">Email address
                <input type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputemail" ></input>
            </label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password
                <input type="password" name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputpassword"></input>
            </label>
        </div>
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  
    </div>

  )
}

export default Login;
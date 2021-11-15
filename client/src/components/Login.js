import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";



function Login({currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password, order, setOrder }) {
  const history = useHistory()
      
  return (
    <BrowserRouter>
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
        {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <h1> Click here to become a member </h1>
    {/* <Button onClick={ <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>
}>Sign Up</Button> */}
    </div>
    </BrowserRouter>
  )
}

export default Login;
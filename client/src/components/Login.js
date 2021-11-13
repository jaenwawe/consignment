import Button from '@restart/ui/esm/Button'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import  Register from './Register'

function Login({currentUser, setCurrentUser }) {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  
  return (
    <div>
      <h1>Login</h1>
    <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address
                <input type="email" 
                name="email" 
                value={email}
            onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"></input>
            </label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password
                <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"></input>
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
  )
}

export default Login;
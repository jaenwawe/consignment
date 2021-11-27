
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { useState } from 'react'

import NavBarContainer from './NavBarContainer';


function Register({createOrder, setCurrentUser, setIsLoggedIn}) {
  const history = useHistory()
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const [gender, setGender] = useState("");
  const [store_name, setStoreName] = useState("");
  const [store, setIsStore] = useState(false);
  let total=0
  let pay_method=''

  const handleRegister = (event) => 
  {
   
      fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email, 
        password,
        username,
        phone_number,
        address,
        state,
        zipcode,
        gender,
        store_name,
        store
       })
      })
        .then(res => {
          if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            console.log(user)
           // user_id = user.id
           setIsLoggedIn(true)
            createOrder(total, pay_method, user.id)        
             ReactDOM.render(<NavBarContainer/>, document.getElementById('root'))

          })
          } else {
            res.json().then(errors => {console.error(errors)})
            }
        })
      }

      
  return (

   <form name="signup/register"  className="center-form" onSubmit={handleRegister}>
   
    <label className="form-label" for="formBasicPassword">First Name</label>
      <input 
      type="text"
      value={first_name} 
      onChange={(e) => setFirstName(e.target.value)}   
      name = "first_name"
      placeholder="First name" 
      className="form-label"
      ></input>
    <br/>
    <br/>
    
    <label className="form-label" for="formBasicPassword">Last Name</label>    
      <input 
      type="text"
      name = "last_name" 
      value={last_name}
      placeholder="Last name"  
      onChange={(e) => setLastName(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>

    <label className="form-label">Email address  </label>
    <input 
      type="email"
       name = "email" 
      value={email}  
      placeholder="ms@gmail.com" 
      onChange={(e) => setEmail(e.target.value)} 
      // className="form-label"
      ></input>
    <br/>
    <br/>
  
    <label className="form-label" for="formBasicPassword">Password</label>
    <input 
      type="password"
      name = "password"
      value={password}  
      placeholder="Shhh...Password"  
      onChange={(e) => setPassword(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>
    
    <label className="form-label" for="formBasicPassword">User Name</label>
    <input 
      type="text"
      name = "username"  
      placeholder="Username"  
      value={username}
      onChange={(e) => setUsername(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>
   
    <label className="form-label">Phone Number</label>
    <input 
      type="text"
      name = "phone_number" 
      value={phone_number} 
      placeholder="595-340-5555"  
      onChange={(e) => setNumber(e.target.value)} 
      className="form-label"></input>
   <br/>
   <br/>

   <label className="form-label">Adress</label>
      <input 
      type="text"
      name = "address" 
      value={address}
      placeholder="Address and Suite No."  
      onChange={(e) => setAddress(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>

    <label className="form-label">State</label>
      <input 
      type="text"
      name = "state" 
      value={state} 
      placeholder="State" 
      onChange={(e) => setState(e.target.value)} 
      className="form-label"></input>
    <br/>
    <br/>

    <label htmlFor="exampleZipChange" className="form-label">ZipCode</label>
    <input 
        type="text"
        name = "zipcode" 
        value={zipcode}
        placeholder="Zipcode"  
        onChange={(e) => setZip(e.target.value)} 
        className="form-label"></input>
        <br/>
        <br/>

    <label htmlFor="exampleInputGenderChange" className="form-label">Gender</label>
    <input 
      type="text"
      name = "gender" 
      value={gender} 
       placeholder="Gender"  
       onChange={(e) => setGender(e.target.value)}
       className="form-label"></input>
    <br/>
    <br/>


    <label htmlFor="exampleInputStoreNameChange" className="form-label">Store Name </label>
    <input
        type="text"
        name = "store_name" 
        value = {store_name}
        placeholder="Type Store Name" 
        onChange={(e) => setStoreName(e.target.value)}
        className="form-label"></input>
       
        
     <label className="form-label" for="formBasicPassword">Already a retail Merchant?</label>
    <input
    type="radio"
    name="store"
    value={store}
    onChange={(e) => setIsStore(e.target.value)}
    checked={false}
    className="form-label"></input> 

   {/* <Button onClick={ <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>
}>Sign Up</Button> */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}


export default Register;
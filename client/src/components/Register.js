import { useState } from 'react'
import { useHistory } from 'react-router-dom'



function Register({setCurrentUser}) {
  const history = useHistory()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [gender, setGender] = useState("");
  const [store_name, setStoreName] = useState("");
  const [isStore, setIsStore] = useState(false);


  //needs to login for this state
  // const [current_user,setCurrentUser]= useState("");


  const handleSubmit = (event) => 
  {
      event.preventDefault()
      fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email, 
        password,
        username,
        number,
        address,
        state,
        zip,
        gender,
        store_name,
        isStore
       })
      })
          .then(res => {
              if (res.ok) {
              res.json().then(user => {
                  setCurrentUser(user)
                  history.push("/")
             
              })
              } else {
                res.json().then(errors => {
                  console.error(errors)
              })
              }
          })
      }

  // function handleGenderChange(event) {
  //   setGender(event.target.value);
  // }

  // function handleStoreStatusChange(event) {
  //   setIsStore(event.target.value);
  // }

  // function handleStoreNameChange(event) {
  //   setStoreName(event.target.value);
  // }



  //   function handleFirstNameChange(event) {
  //       setFirstName(event.target.value);
  //     }
    
  //     function handleLastNameChange(event) {
  //       setLastName(event.target.value);
  //     }
    
  //     function handleEmailChange(event) {
  //       setEmail(event.target.value);
  //     }
    
  //     function handlePasswordChange(event) {
  //       setPassword(event.target.value);
  //     }
    
  //     function handleUserNameChange(event) {
  //       setUsername(event.target.value);
  //     }
    
  //     function handleNumberChange(event) {
  //       setNumber(event.target.value);
  //     }
    
  //     function handleAddressChange(event) {
  //       setAddress(event.target.value);
  //     }
    
  //     function handleStateChange(event) {
  //       setState(event.target.value);
  //     }
    
  //     function handleZipChange(event) {
  //       setZip(event.target.value);
  //     }

  return (

   <form className="center-form" onSubmit={handleSubmit}>
    <label className="form-label" for="formBasicPassword">First Name</label>
      <input 
      type="text"
      name = "firstName"
      value={firstName} 
      placeholder="First name" 
      onChange={setFirstName} 
      className="form-label"></input>
    <br/>
    <br/>
    
    <label className="form-label" for="formBasicPassword">Last Name</label>    
      <input 
      type="text"
      name = "lastName" 
      value={lastName}
      placeholder="Last name"  
      onChange={setLastName} 
      className="form-label"></input>
    <br/>
    <br/>

    <label className="form-label">Email address  </label>
    <input 
      type="email"
      name = "email" 
      value={email}  
      placeholder="Email@message.com" 
      onChange={setEmail} 
      className="form-label"></input>
    <br/>
    <br/>
  

    <label className="form-label" for="formBasicPassword">Password</label>
    <input 
      type="password"
      name = "password"
      value={password}  
      placeholder="Shhh...Password"  
      onChange={setEmail} 
      className="form-label"></input>
    <br/>
    <br/>
    <br/>
    <br/>

    <label className="form-label" for="formBasicPassword">User Name</label>
    <input 
      type="text"
      name = "username"  
      placeholder="Username"  
      value={username}
      onChange={setUsername} 
      className="form-label"></input>
    <br/>
    <br/>
   
    <label className="form-label">Phone Number</label>
    <input 
      type="text"
      name = "number" 
      value={number} 
      placeholder="595-340-5555"  
      onChange={setNumber} 
      className="form-label"></input>
   <br/>
   <br/>

   <label className="form-label">Adress</label>
      <input 
      type="text"
      name = "address" 
      value={address}
      placeholder="Address and Suite No."  
      onChange={setAddress} 
      className="form-label"></input>
    <br/>
    <br/>

    <label className="form-label">State</label>
      <input 
      type="text"
      name = "state" 
      value={state} 
      placeholder="State" 
      onChange={setState} 
      className="form-label"></input>
    <br/>
    <br/>

    <label htmlFor="exampleZipChange" className="form-label">ZipCode</label>
    <input 
        type="text"
        name = "zip" 
        value={zip}
        placeholder="Zipcode"  
        onChange={setZip} 
        
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
        value= {store_name}
        placeholder="Type Store Name" 
        onChange={(e) => setStoreName(e.target.value)}
        className="form-label"></input>
       
        
   <br/>
   <br/>
    <label className="form-label" for="formBasicPassword">Already a retail Merchant?</label>
    <input
    type="radio"
    name="isStore"
    value={isStore}
    onChange={(e) => setIsStore(e.target.value)}
    checked={true}
    className="form-label"></input>
    <br/>
    <br/>


      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}


export default Register;
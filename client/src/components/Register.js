import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom';
import {Container} from 'react'



function Register({setCurrentUser}) {
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
  const [isStore, setIsStore] = useState("no");

//needs to login for this state
  // const [current_user,setCurrentUser]= useState("");


  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleStoreStatusChange(event) {
    setIsStore(event.target.value);
  }

  function handleStoreNameChange(event) {
    setStoreName(event.target.value);
  }

  function Login({ setCurrentUser }) 
  {
    // const history = useHistory()
    // const navigate = useNavigate();
    // navigate('/home')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = (event) => 
    {
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
                    setCurrentUser(user)
                })
                } else {
                res.json().then(errors => {
                    console.error(errors)
                })
                }
            })
        }
  }
    


  function handleSubmit(event)  
  {
   
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
                  setCurrentUser(user)
              })
              } else {
              res.json().then(errors => {
                  console.error(errors)
              })
              }
          })
      }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
      }
    
      function handleLastNameChange(event) {
        setLastName(event.target.value);
      }
    
      function handleEmailChange(event) {
        setEmail(event.target.value);
      }
    
      function handlePasswordChange(event) {
        setPassword(event.target.value);
      }
    
      function handleUserNameChange(event) {
        setUsername(event.target.value);
      }
    
      function handleNumberChange(event) {
        setNumber(event.target.value);
      }
    
      function handleAddressChange(event) {
        setAddress(event.target.value);
      }
    
      function handleStateChange(event) {
        setState(event.target.value);
      }
    
      function handleZipChange(event) {
        setZip(event.target.value);
      }

  return (
    < div className={"center"} >
   <form onSubmit={handleSubmit}>

    <label className="form-label" for="formBasicPassword">First Name</label>
    <input type="text" placeholder="Enter first name" onChange={handleFirstNameChange} value={firstName}/>
    <br/>
    <br/>
    
    <label className="form-label" for="formBasicPassword">Last Name</label>    
    <input type="text"   placeholder="Enter last name"  onChange={handleLastNameChange} value={lastName}/>
    <br/>
    <br/>

    <label htmlFor="exampleInputEmail1" className="form-label">Email address  </label>
    <input type="text"  placeholder="Enter email" onChange={handleEmailChange} value={email}/>
    <br/>
    <br/>
  

    <label className="form-label" for="formBasicPassword">Password</label>
    <input type="text" placeholder="Enter passwor"  onChange={handlePasswordChange} value={password}/><br/>
    <br/>
    <br/>
    <br/>

    <label className="form-label" for="formBasicPassword">User Name</label>
    <input type="text" placeholder="Enter username"  onChange={handleUserNameChange} value={username}/>
    <br/>
    <br/>
   
    <label htmlFor="exampleNumberChange" className="form-label">Phone Number</label>
    <input type="text" placeholder="Enter Area Code and Phone Number"  onChange={handleNumberChange} value={number}/>
   <br/>
   <br/>

   <label htmlFor="exampleAddressChange" className="form-label">Adress</label>
    <input type="text"  placeholder="Enter Address and Suite No."  onChange={handleAddressChange} value={address}/>
    <br/>
    <br/>

    <label htmlFor="exampleStateChange" className="form-label">State</label>
    <input type="text" placeholder="Type State" onChange={handleStateChange} value={state}/>
    <br/>
    <br/>

    <label htmlFor="exampleZipChange" className="form-label">ZipCode</label>
    <input 
        type="text"
        placeholder="Enter zipcode"  
        onChange={handleZipChange} 
        value={zip}/>
        <br/>
        <br/>

    <label htmlFor="exampleInputGenderChange" className="form-label">Gender</label>
    <input type="text" placeholder="Enter gender"  onChange={handleGenderChange} value={gender}/>
    <br/>
    <br/>


    <label htmlFor="exampleInputStoreNameChange" className="form-label">Store Name </label>
    <input
        type="text"
        placeholder="Enter Store Name" 
        name="store_name"
        onChange={handleStoreNameChange} 
        value={store_name}/>
   <br/>
   <br/>
    
    <label className="form-label" for="formBasicPassword">Already a retail Merchant?</label>
    <input
    type="radio"
    name="store_status"
    onChange={handleStoreStatusChange}
    value={isStore}
    checked={false}/>
    <br/>
    <br/>


      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Register;

import { useHistory } from 'react-router-dom'
import { useState } from 'react'


function Register({
  handleRegister, first_name,setFirstName,last_name,setLastName, username,setUsername,phone_number,setNumber, address,setAddress,state,setState, zipcode,setZip,gender,setGender,email, setEmail, store,store_name,setStoreName,setIsStore,setPassword,password 

}) {
    
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

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}

export default Register;
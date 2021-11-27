import React, {useHistory, useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'
import '../style/App.css'
import "../style/index.css"


import NavBarContainer from './NavBarContainer';
import Home from "./Home";
import About from "./About";
import Login from './Login';
import Register from './Register';

import Logout from './Logout';
import Sale from './Sale';

import ProductContainer from "./ProductContainer";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productArr, setProductArr]= useState([])
  const [cartArr, setCartArr] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const [gender, setGender] = useState("");
  const [store_name, setStoreName] = useState("");
  const [store, setIsStore] = useState(false);   


  const [currentUser, setCurrentUser] = useState(null)
  const [orderArr, setorderArr] = useState([])
  const [order, setOrder]= useState(null)
 
  useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => addToProductArr(productArr))
      },[])

      function addToProductArr(product) {
        setProductArr([...product, ...productArr ])
        console.log(productArr)
      }
    
  
          const handleLogin = (event) => {
          let total=0
          let pay_method=''
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
                res.json().then(user => 
                  loginRegisterInfo(user)
                )} else {
                res.json().then(errors => {
                  console.error(errors)
                })
              }
            })
        }

        const handleRegister = (event) => 
        {
            event.preventDefault()
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
                res.json().then(user => 
                  {
                  loginRegisterInfo(user)
                  }
                )} else {
                  res.json().then(errors => {
                    console.error(errors)   
                  })
                  }
              })
            }
      

      function loginRegisterInfo(user)
      {
        
          setCurrentUser(user) 
          console.log(user)
          setIsLoggedIn(true)          
          let user_id = user.id
         
          fetch('/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user_id
            })
          })
            .then(res => {
              if (res.ok) {
                res.json().then(order => {
                  setOrder(order)
                  console.log(order)
                  
                })
              } else {
                res.json().then(errors => 
                console.error(errors)
                )
              }
          })
         }
        
      
        function handleLogOut(event) {
      
              // fetch(`/logout/${currentUser.id}`,{
                fetch(`/logout`,{
              method: "DELETE"
          })
          .then(resp => {
              if (resp.ok) {
                  // setCurrentUser(null)
                  setCurrentUser({})
         
              }else {
              resp.json().then(errors => {
                console.error(errors)
      
              })
            }
        })
      }
      
  return(
    <div> 
          <NavBarContainer 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
            setCartArr= {setCartArr} 
            cartArr= {setCartArr}
            handleLogin={handleLogin}
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            setEmail={setEmail} 
            email={email} 
            setPassword={setPassword} 
            password={password}
            />
              <Switch>
                      <Route path="/home"> <Home /> </Route>
                      <Route path="/about"> <About /> </Route>
                      <Route path="/login">
                          <Login  
                          handleLogin={handleLogin} 
                          setIsLoggedIn={setIsLoggedIn}
                          setEmail={setEmail}
                          setPassword={setPassword} /> 
                      </Route>

                  

                      <Route path="/register">
                        <Register 
                        handleRegister={handleRegister}
                        first_name={first_name}
                        setFirstName={setFirstName}
                        last_name={last_name}
                        setLastName={setLastName}
                        username={username}
                        setUsername={setUsername}
                        phone_number={phone_number}
                        setNumber={setNumber}
                        address={address}
                        setAddress={setAddress}
                        state={state}
                        setState={setState}
                        zipcode={zipcode}
                        setZip={setZip}
                        gender={gender}
                        setGender={setGender}
                        email={email}
                        setEmail={setEmail}
                        store={store}
                        store_name={store_name}
                        setStoreName={setStoreName}
                        setIsStore={setIsStore}
                        setPassword={setPassword}
                        password={password} 
                        /> 
                      </Route>
            
              if(isLoggedIn && currentUser){
                      <>
              
                      <Route path="/sale">
                         <Sale  
                         currentUser={currentUser} 
                         setProductArr={setProductArr}/> 
                      </Route>

                      <Route path="/logout">
                         <Logout  
                         setCurrentUser={setCurrentUser}
                         currentUser={currentUser} 
                         setProductArr={setProductArr}
                         setIsLoggedIn={setIsLoggedIn}
                         /> 
                      </Route> 
                      </>   
            }
            
                  </Switch>

          <ProductContainer 
            cartArr ={cartArr}
            productArr={productArr}
            setProductArr={setProductArr}
          />

  </div>)
}
export default App;
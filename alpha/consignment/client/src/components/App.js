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
  const [product_id, setProductId] = useState('')


  const [currentUser, setCurrentUser] = useState(null)
  const [orderArr, setOrderArr] = useState([])
  const [order, setOrder]= useState(null)
 
  useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => addToProductArr(productArr))
      },[])


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
        


         function addToProductArr(product) {
          setProductArr([...product, ...productArr ])
          console.log(productArr)
        }
      
         function removeFromProductArr(product_id){}


         function addIDinCartArr(product_id) {
          setCartArr([...cartArr,product_id])        
          setProductArr([productArr.filter(AllProductID => AllProductID !== product_id)])
          console.log(cartArr)
        }
  
  
      function handleRemoveProductCarArr(product_id) {
          setProductArr([...product_id, ...productArr])
          setCartArr([cartArr.filter(inCartProductID => inCartProductID !== product_id)])
          console.log(cartArr)
        }
  
         let unregisteredRoutes =
         <>
         <Route path="/login">
              <Login  
              cartArr={cartArr}
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
         </>

     let registeredRoutes =
                 <>
                    <Route path="/sale">
                         <Sale  
                         currentUser={currentUser} 
                         setProductArr={setProductArr}
                         setIsLoggedIn={setIsLoggedIn}
                         productArr={productArr}
                         /> 
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
      
      //setProductArr([product.id, ...productArr])
      //  const [cartArr, setCartArr] = useState([])
      function removeFromCart(product_id){
     
        setCartArr (cartArr.filter(item => item !== product_id))
      }     

      function addToCart(product_id){
        setCartArr([product_id,...cartArr])
      }
      

  return(
    <div> 
          <NavBarContainer 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}

            addToCart= {addToCart}
            cartArr= {cartArr}
            
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
                     
            {isLoggedIn ? registeredRoutes : unregisteredRoutes} 
            
                  </Switch>

          <ProductContainer 
          productArr={productArr}
             removeFromCart={removeFromCart}  
             addToCart={addToCart} 
             cartArr ={cartArr}
             removeFromCart={removeFromCart} 
             />

  </div>)
}
export default App;
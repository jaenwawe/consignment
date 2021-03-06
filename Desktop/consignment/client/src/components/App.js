import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom";
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
import CartContainer from './CartContainer';
import CheckoutCart from './CheckoutCart';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productArr, setProductArr]= useState([])
  const [cartArr, setCartArr] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState(null);
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
  const [priorOrdersArr, setPriorOrderArr] = useState([])
  const [order, setOrder]= useState(null)
  const [total, setTotal] = useState(0)
  const [pay_method, setPayMethod] = useState('$')

  const [orderItemsArr, setOrderItemsArr]= useState([])
  const history = useHistory();
  
 
  useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => setProductArr(productArr))
      },[])
  

      const homeleNavigation = () => {
        history.push("/");
      };
   
          const handleLogin = (event) => {
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
                res.json()
                .then(user => loginRegisterInfo(user))
                .then =(setIsLoggedIn(true))
                } else {
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
     
            function addOrderItems(product_id,customer_id,order_id)
            {   
                fetch('/order_items', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      order_id: order_id,
                      customer_id: customer_id,
                      product_id: product_id
                  })
                })
                  .then(res => {
                    if (res.ok) {
                      res.json().then(order_item => {console.log(order_item)
                        
                      })
                    } else {
                      res.json().then(errors => 
                      console.error(errors)
                      )
                     
                    }
                })
               }

      

      function loginRegisterInfo(user)
      {
        
          setCurrentUser(user) 
          console.log(user)
          setIsLoggedIn(true)          
          let user_id = user.id
          homeleNavigation()
         
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

         function removeProduct(product) {      
          setProductArr(productArr.filter(item => item !== product))
        }

        function removeFromCart(product){
          setCartArr (cartArr.filter(item => item !== product))
        }     
  

        function addToCart(product){
          setCartArr([product,...cartArr])
        }
        function addToProducts(product) {
      
          setProductArr([product,...productArr])
        }
        
        function cartClick(product){
          addToProducts(product)
          removeFromCart(product)          
        }
        
        function nonCartProductClick(product){
          addToCart(product)
          removeProduct(product) 
         }

        const display = 
        <ProductContainer 
          productArr={productArr}
          nonCartProductClick={nonCartProductClick}
          />
  
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
                     {display}    
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
                    
                      <Route path="/checkout">
                         <CheckoutCart
                         cartArr={cartArr}
                         order={order}
                        setOrderItemsArr={setOrderItemsArr}
                        currentUser={currentUser} 
                        orderItemsArr={orderItemsArr}
                        addOrderItems={addOrderItems} 
                        total={total}
                        setTotal={setTotal}
                        pay_method={pay_method}
                        setPayMethod={setPayMethod}
                        cartClick={cartClick}
                        removeFromCart={removeFromCart}
                         /> 
                      </Route>

                      <Route path="/logout">
                         <Logout  
                         setCurrentUser={setCurrentUser}
                         setCartArr={setCartArr}
                         setIsLoggedIn={setIsLoggedIn}
                         /> 
                      </Route> 
                  </>
      
  return(
    <div> 
          <NavBarContainer 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
            
            handleLogin={handleLogin}
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            
            setEmail={setEmail} 
            email={email} 
            
            setPassword={setPassword} 
            password={password}
            />


        
                   <Switch>
                     <Route exact path="/"> {display}</Route> 
                      <Route path="/home"> <Home /> {display} </Route>
                      <Route path="/about"> <About /> {display} </Route>
                     
                      <Route path="/cart">
                        <CartContainer
                          order={order}
                          cartArr={cartArr}
                          orderItemsArr={orderItemsArr}
                          setOrderItemsArr={setOrderItemsArr}
                          cartClick={cartClick}
                          />
                      
                      </Route>   


                      CartContainer
            
            {isLoggedIn ? registeredRoutes : unregisteredRoutes} 
            
                  </Switch>

       

  </div>)
}
export default App;
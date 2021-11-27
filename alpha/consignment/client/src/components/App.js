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

import ProductList from "./ProductList";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [productArr, setProductArr]= useState([])
  const [cartArr, setCartArr] = useState([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')   


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
      

      function handleProductIDInCartArr(product_id) {
        console.log(product_id)
        setCartArr([product_id, ...cartArr ])
        console.log(cartArr)
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
                res.json().then(user => {
                  setCurrentUser(user)
                  console.log(user)
                 // user_id = user.id
                 setIsLoggedIn(true)
                  createOrder(total, pay_method, user.id)
                  console.log(order)         
                   ReactDOM.render(<NavBarContainer/>, document.getElementById('root'))
      
      
                })
              } else {
                res.json().then(errors => {
                  console.error(errors)
                })
              }
            })
        }
      
      
       function createOrder(total, pay_method, user_id)
       {
        console.log(user_id)
        console.log(pay_method)
        console.log(total)
      
          // event.preventDefault()
          // useEffect(() => {
          fetch('/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              total,
              pay_method,
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
      isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
      setCartArr= {setCartArr} cartArr= {setCartArr}
      handleLogin={handleLogin}/>
        <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login  handleLogin={handleLogin} 
                    setIsLoggedIn={setIsLoggedIn}
                    setEmail={setEmail}
                    setPassword={setPassword}/> 
                    
                </Route>

                <Route path="/register">
                  <Register handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} createOrder={createOrder}/> 
            
                </Route>
            </Switch>

    <ProductList 
      setCartArr= {setCartArr}
      productArr={productArr}
      handleProductIDInCartArr={handleProductIDInCartArr}
    />
</div>)
}
export default App;
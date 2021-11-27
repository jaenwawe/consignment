import React from "react";
import ReactDOM from 'react-dom'
import { useState , useEffect} from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import '../style/App.css'
import "../style/index.css"

import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnAuthenticatedApp"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [orderArr, setorderArr] = useState([])
  const [order, setOrder]= useState(null)
  const [pay_method, setPay_method] = useState('')
  const [total, setTotal] = useState(0)
  
  const [productArr, setProductArr]= useState([])
  const [productAdded, setProductAdded] = useState(null)
  const [title, setTitle] = useState("")
  
  const [orderItemArr, setOrderItemArr] = useState([])
  const [orderItem, setOrderItem] = useState(null)

  const [cart, setCart] = useState([])

  function addToCart(id) {
    setCart([...cart, id])
    console.log(cart)
  }
  
  const history = useHistory()

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, []);


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
          res.json().then(user => {
            console.log(user)
            setCurrentUser(user)
           // user_id = user.id
            createOrder(total, pay_method, user.id)         
            //  history.push("/")  // causes type error
             ReactDOM.render(<App/>, document.getElementById('root'))




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
            console.log(order)
            setOrder(order.id)
          })
        } else {
          res.json().then(errors => 
          console.error(errors)
          )
          // })
        }
        // },[])
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
            history.push("/")
        }else {
        resp.json().then(errors => {
          console.error(errors)
          homeButton()
        })
      }
  })
}


function homeButton() {
    history.push("/home");
}



useEffect(() => {
  fetch("/styles")
    .then((response) => response.json())
    .then((productArr) => setProductArr(productArr))
    },[])




  const addToProductArr=(product)=>
    setProductArr(product, ...productArr)
    useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => addToProductArr(productArr))
      },[])


            
  if(!authChecked) { return <></> }
  return (
  
        // <Bar currentUser={currentUser}  setCurrentUser={setCurrentUser}/>

        
        <BrowserRouter>
            <Route path="/">
            {console.log(currentUser)}
            {currentUser ? 
              (<AuthenticatedApp  addToCart={addToCart} setCurrentUser={setCurrentUser} currentUser={currentUser} productArr={productArr} setProductArr={setProductArr}
                handleLogOut={handleLogOut} productArr={productArr} setProductArr={setProductArr} />) 
              : 
              (<UnauthenticatedApp title={title}  setTitle={setTitle}  setCurrentUser={setCurrentUser} productArr={productArr} setProductArr={setProductArr} email= {email} setEmail={setEmail} password= {password} setPassword={setPassword} handleLogin={handleLogin}/>)
            }
              </Route>
      </BrowserRouter>
      
    )
}



//Login will work sometimes, but always has this error

// Unhandled Rejection (TypeError): Cannot read properties of undefined (reading 'push')
// (anonymous function)
// src/components/App.js:63
//   60 |   res.json().then(user => {
//   61 |     console.log(user)
//   62 |     setCurrentUser(user)
// > 63 |      history.push("/")  // causes type error
//      | ^  64 |   })
//   65 | } else {
//   66 |   res.json().then(errors => {


  //https://stackoverflow.com/questions/44009618/uncaught-typeerror-cannot-read-property-push-of-undefined-react-router-dom
  //export default withRouter(App); 
  


  export default App;
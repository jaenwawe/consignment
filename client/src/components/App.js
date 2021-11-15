import React from "react";
import { useState , useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import '../style/App.css'
import "../style/index.css"

import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnAuthenticatedApp"

import { useHistory } from 'react-router-dom'

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [authChecked, setAuthChecked] = useState(false)
  const [title, setTitle] = useState("")
  const [currentOrder, setCurrentOrder] = useState("")
  const [productArr, setProductArr]=useState([])
  const [productAdded, setProductAdded] = useState(null)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let currentUserID = currentUser.id
  let currentProductID = currentOrder.currentProductid


  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
            setCurrentOrder(currentOrder)
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
            // history.push("/")   causes type error
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

    
  function handleLogOut(currentUserId) {
        fetch(`/logout/${currentUserId}`,{
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            console.log(currentUser)
            setCurrentUser(null)
            history.push("/")
        }else {
        resp.json().then(errors => {
          console.error(errors)
        })
      }
  })
}





// products => props object
// { products } => props.products

// http://localhost:3000/products



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
              (<AuthenticatedApp  setCurrentUser={setCurrentUser} currentUser={currentUser} productArr={productArr} setProductArr={setProductArr}
                handleLogOut={handleLogOut} productArr={productArr} setProductArr={setProductArr} />) 
              : 
              (<UnauthenticatedApp title={title}  setTitle={setTitle}  setCurrentUser={setCurrentUser} productArr={productArr} setProductArr={setProductArr} email= {email} setEmail={setEmail} password= {password} setPassword={setPassword} handleLogin={handleLogin}/>)
            }
              </Route>
      </BrowserRouter>
      
    )
}
  
  export default App;
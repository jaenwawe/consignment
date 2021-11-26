import React, {useState, useEffect} from 'react'
import {
    Route,
    Switch,
    BrowserRouter as Router
 } from "react-router-dom";
import useHistory from 'react'
import ReactDOM from 'react-dom'
import NavBarLinks from "./NavBarLinks";
import Login from "./Login";
import Register from "./Register";

function NavBarContainer ({cartArr,setCartArr, isLoggedIn,setIsLoggedIn,productIDCart,ArrproductArr}){
  
    const [currentUser, setCurrentUser] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   
    const [orderArr, setorderArr] = useState([])
    const [order, setOrder]= useState(null)


    function addToCart(id) {
        setCartArr([...cartArr, id])
        console.log(cartArr)
      }
      

    
    //   useEffect(() => {
    //     fetch("/me")
    //       .then((resp) => {
    //         if (resp.ok) {
    //           resp.json().then(user => {
    //             setCurrentUser(user)
    //             setAuthChecked(true)
    //           })
    //         } else {
    //           setAuthChecked(true)
    //         }
    //       })
    //   }, []);
    
    
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
                console.log(user)
                setCurrentUser(user)
               // user_id = user.id
                createOrder(total, pay_method, user.id)         
                //  history.push("/")  // causes type error
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
       
            }else {
            resp.json().then(errors => {
              console.error(errors)
    
            })
          }
      })
    }
    

    return(
        <Router>
                <div>
     
            {/* <AuthBar setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogOut={handleLogOut} /> */}
            <NavBarLinks setIsLoggedIn={setIsLoggedIn}/>  
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} setEmail={setEmail} email={email} setPassword={setPassword} password={password} order={order} setOrder={setOrder} setIsLoggedIn={setIsLoggedIn}/> 
            <Register setCurrentUser={setCurrentUser} handleLogin={handleLogin}currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>   
        </div>)
        </Router>)

};




  export default NavBarContainer;

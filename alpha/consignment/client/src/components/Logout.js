// import Button from '@restart/ui/esm/Button'
// import { useState } from 'react'
  import { useHistory } from 'react-router-dom'

  import NavBar from './NavBar'
  import ProductList from './ProductList'
//   import UnauthenticatedApp from './UnauthenticatedApp' 
  import App from './App'

function Logout({ setLoggedIn, setCurrentUser,homeButton}) {
    const history = useHistory()
    setLoggedIn(false)
   
    function handleLogOut(event) {

        // fetch(`/logout/${currentUser.id}`,{
        fetch(`/logout`,{
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
       
            setCurrentUser(null)
            history.push("/")
        }else {
            resp.json().then(errors => {
            console.error(errors)
            homeButton()
            })
        }
  })
}

 

    return( <div>
    <h1>Logout</h1>
          <Home/>
    </div>

    )
}


export default Logout;
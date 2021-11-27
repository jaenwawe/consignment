// import Button from '@restart/ui/esm/Button'
// import { useState } from 'react'
  import { useHistory } from 'react-router-dom'

  import NavBar from './NavBar'
  import ProductList from './ProductList'
//   import UnauthenticatedApp from './UnauthenticatedApp' 
  import App from './App'

function Logout({ setCurrentUser,homeButton, productArr, setProductArr, title}) {
    const history = useHistory()
   
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
    <NavBar/>
    {/* <ProductList  productArr={productArr} setProductArr={setProductArr} title={title}/> */}
    <ProductList  />
    </div>

    )
}


export default Logout;
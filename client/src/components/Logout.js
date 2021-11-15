// import Button from '@restart/ui/esm/Button'
// import { useState } from 'react'
 import { useHistory } from 'react-router-dom'
import App from './App'


function Logout({currentUser, setCurrentUser,handleLogout, handleLogOut,currentUserID}) {
  const history = useHistory()
  const userLoggedOut = currentUser.name
  const userLoggedOutID = currentUser.id

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/logout/:userLoggedOut', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser.id)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(`${userLoggedOut}` + ' ' + "logged out")
            setCurrentUser(null)
            history.push("/");
          })
        }else {
            res.json().then(errors => {
            console.error(errors)
            })
        }
      })
    }
  

 
  // return (
  //   <>handleLogOut(currentUserID)</>
  // )
}
// }

export default Logout;
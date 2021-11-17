// import Button from '@restart/ui/esm/Button'
// import { useState } from 'react'
 import { useHistory } from 'react-router-dom'
import App from './App'


function Logout({ setCurrentUser,user_id}) {
  const history = useHistory()



    const handleLogOut =(event) => {
        event.preventDefault()
        fetch('/logout/:user_id', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_id)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(`${user_id}` + ' ' + "logged out")
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
}


export default Logout;